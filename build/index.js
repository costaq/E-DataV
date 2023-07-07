/*
 * @Autor: costa
 * @Date: 2023-03-28 16:21:57
 * @LastEditors: costa
 * @LastEditTime: 2023-07-07 16:59:56
 * @Description: 
 * @Copyright: © 2023 by costa. All rights reserved.
 */
const fs = require('fs');
const path = require('path');
const { copyDir, fileForEach, readFile, writeFile, dirForEach } = require('./plugin/fs');
const exec = require('./plugin/exec');
const print = require('./plugin/print');
const PACKAGE_SRC = './src';
const COMPILE_SRC = './lib';
const COMPONENTS_DIR = '/components';
const ENTRANCE = '/index.js';

async function start() {
    print.log('开始编译');

    const copyPackage = await copyDir(PACKAGE_SRC, COMPILE_SRC);
    if (!copyPackage) {
        print.error('复制文件夹出错');

        return
    }

    print.log('复制文件夹成功');

    const compileCss = await compileSassToCss();

    if (!compileCss) {
        print.error('转换css出错');
        return;
    }

    print.log('转换css成功');

    const cssImport = await replaceCssImport();
    if (!cssImport) {
        print.error('替换css导入出错');
        return;
    }

    print.log('替换css导入成功');

    const removeFiles = await removeOtherFiles();

    if (!removeFiles) {
        print.error('删除多余文件出错');
        return;
    }

    print.log('删除多余文件css成功');

    const componentsExport = await addComponentsExport();

    if (!componentsExport) {
        print.error('入口文件增加组件导出出错');
        return;
    }

    print.log('入口文件增加组件导出成功');

    // 编译 UMD 版本
    const rollupCompile = await exec(`rollup -c build/rollup.config.mjs`);

    if (!rollupCompile) {
        print.error('rollup 编译出错');

        return
    }

    print.success('rollup 编译结束');
}

/**
 * @description 将scss文件转成css文件
 */
async function compileSassToCss() {
    const dir = `${COMPILE_SRC}${COMPONENTS_DIR}`;
    return await fileForEach(dir, async file => {
        if (path.extname(file) === '.scss') {
            const execStr = `sass ${file} ${file.replace('.scss', '.css')} --no-source-map`;
            await exec(execStr);
        }
    });
}


/**
 * @description 删除多余文件
 */
async function removeOtherFiles() {
    const dir = `${COMPILE_SRC}${COMPONENTS_DIR}`;
    return await fileForEach(dir, async file => {
        // 若为scss文件，则删除
        if (path.extname(file) !== '.scss') return;
        fs.unlink(file, err => {
            if (err) throw new Error(err);
        });
    });
}

/**
 * @description 替换css导入
 * @returns {Promise<Boolen>}
 */
async function replaceCssImport() {
    const dir = `${COMPILE_SRC}${COMPONENTS_DIR}`;
    return await fileForEach(dir, async file => {
        if (path.extname(file) !== '.js') return;
        let content = await readFile(file);
        content = content.replace('.scss', '.css');
        await writeFile(file, content);
    });
}

/**
 * @description 在入口文件中增加css导入
 * @returns {Promise<Boolen>}
 */
async function addCssImport() {
    const dir = `${COMPILE_SRC}${COMPONENTS_DIR}`;
    return await fileForEach(dir, async file => {
        if (path.extname(file) !== '.js') return;
        let content = await readFile(file);
        content = `import './style/main.css';\n` + content;
        await writeFile(file, content);
    });
}

/**
 * @description 替换vue文件中sass的引用
 */
async function replaceSassFromVue() {
    const dir = `${COMPILE_SRC}${COMPONENTS_DIR}`;
    return await fileForEach(dir, async file => {
        if (path.extname(file) !== '.vue') return;
        let content = await readFile(file);
        // content = content.replace(/<style[ a-z="']*>(\n|\r)?|<\/style>/g, '');
        let styleIndex = content.search('<style');
        content = content.slice(0, styleIndex);
        await writeFile(file, content);
    });
}

/**
 * @description 在入口文件中增加组件导出
 * @returns {Promise<Boolean>}
 */
async function addComponentsExport() {
    const dir = `${COMPILE_SRC}${COMPONENTS_DIR}`;
    const components = [];

    await dirForEach(dir, src => {
        const component = src.split('/').slice(-1)[0];
        if (component !== 'styled')
            components.push(component);
    });
    const importString = components.reduce((all, cur) => {
        return all + '\n' + `export { default as E${toUpperFirstWord(cur)} } from '.${COMPONENTS_DIR}/${cur}';`
    }, '') + '\n';

    const targetFile = `${COMPILE_SRC}${ENTRANCE}`;

    let content = await readFile(targetFile);

    content = importString + content;

    return await writeFile(targetFile, content);
}

/**
 * @description 首字母大写
 */
function toUpperFirstWord(str) {
    let arr = str.split("-");
    let newArr = arr.map((ele, idx) => {
        return idx === 0 ? ele : ele[0].toUpperCase() + ele.slice(1);
    })
    str = newArr.join("");
    return `${str.slice(0, 1).toUpperCase()}${str.slice(1)}`;
}

start();
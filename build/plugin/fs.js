const fs = require('fs');
const fsExtra = require('fs-extra');

/**
 * @description 拷贝文件夹
 * @param {*} source 源文件夹
 * @param {*} destination 目标文件夹
 * @returns {Promise<Boolen>}
 */
async function copyDir(source, destination) {
    return new Promise(resolve => {
        (async () => {
            try {
                // 如果目录不存在，则创建
                await fsExtra.ensureDir(destination);
                // 清空目标文件夹
                await fsExtra.emptyDir(destination);
                // 复制文件夹
                await fsExtra.copy(source, destination);
                resolve(true);
            }
            catch (ex) {
                console.log('复制目录出错：', ex);
                resolve(false);
            }
        })()
    });
}

/**
 * @description 文件/文件夹遍历
 * @param {*} dir 文件夹路径
 * @param {*} callback 如果发现是文件，回调函数
 * @returns {Promise<Boolen>}
 */
async function fileForEach(dir, callback) {
    return new Promise(resolve => {
        // 读取文件夹
        fs.readdir(dir, async (err, files) => {
            if (err) resolve(false);
            for (let file of files) {
                const fileName = `${dir}/${file}`;
                // 简单判断是否是文件，如果是，则回调，若不是，则继续遍历文件夹
                if (file.includes('.')) {
                    await callback(fileName);
                }
                else {
                    await fileForEach(fileName, callback);
                }
            }
            resolve(true);
        });
    });
}

/**
 * @description 目录遍历
 * @param {*} dir 
 * @param {*} callback 
 * @returns  {Promise<Boolen>}
 */
async function dirForEach(dir, callback) {
    return new Promise(resolve => {
        // 读取文件夹
        fs.readdir(dir, async (err, files) => {
            if (err) resolve(false);
            for (let file of files) {
                const fileName = `${dir}/${file}`;
                // 简单判断是否是文件夹，若是，则调用回调
                if (file.includes('.')) return;
                await callback(fileName);
            }
            resolve(true);
        });
    });
}

/**
 * @description 读取文件
 * @param {*} src 文件路径
 */
async function readFile(src) {
    return new Promise(resolve => {
        fs.readFile(src, { encoding: 'utf-8' }, (err, data) => {
            if (err) throw new Error(err);
            resolve(data);
        });
    })
}

/**
 * @description 写文件
 * @param {*} src 文件路径
 * @param {*} content 文本内容
 */
async function writeFile(src, content) {
    return new Promise(resolve => {
        fs.writeFile(src, content, { encoding: 'utf-8' }, err => {
            if (err) resolve(false);
            resolve(true);
        });
    });
}

module.exports = {
    copyDir,
    fileForEach,
    dirForEach,
    readFile,
    writeFile
};
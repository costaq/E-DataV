/*
 * @Autor: costa
 * @Date: 2023-03-28 16:40:07
 * @LastEditors: costa
 * @LastEditTime: 2023-04-03 17:33:35
 * @Description: rollup编译
 * @Copyright: © 2023 by costa. All rights reserved.
 */
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import vue from 'rollup-plugin-vue';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

export default {
    input: './build/entry.js',
    output: [{
        file: './dist/e-datav.min.vue.js',
        format: 'umd',
        name: 'eDataV'
    }],
    plugins: [
        babel({
            exclude: 'node_modules/**'
        }),
        commonjs(),
        //支持css文件的加载、css加前缀、css压缩、对scss/less的支持等等
        postcss({
            // plugins: [
            //     // 给css3的一些属性加前缀
            //     autoprefixer(),
            //     // 对打包后的css进行压缩
            //     cssnano()
            // ],
            modules: true
            // extract: 'css/index.css'
        }),
        // 用于处理.vue文件
        vue({
            style: {
                postcssPlugins: [
                    autoprefixer(),
                    // 进行压缩，报错 (plugin VuePlugin) Error: plugin is not a function，未找到解决方案
                    // cssnano()
                ]
            }
        }),
        // 代码压缩
        terser()
    ],
    external: [  //外部库， 使用'umd'文件时需要先引入这个外部库
        'vue'
    ]
};
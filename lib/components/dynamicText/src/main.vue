<!--
 * @Autor: costa
 * @Date: 2023-09-07 09:56:56
 * @LastEditors: costa
 * @LastEditTime: 2023-09-21 15:50:44
 * @Description: 
 * @Copyright: © 2023 by costa. All rights reserved.
-->
<template>
    <text-container :colors="colors">
        <e-text v-for="(txt, index) in spans" :key="`${spans.length}${index}`" :spacing="spacing" :duration="spans.length * speed" :delay="index * speed" >{{ txt }}</e-text>
    </text-container>
</template>
<script>
import { TextContainer, Text } from './text.style';

export default {
    name: 'EDynamicText',
    components: {
        TextContainer,
        'e-text': Text
    },
    props: {
        /**
        * @description 文字
        */
        text: {
            type: String,
            default: ''
        },
        /**
         * @description 左右间距
         */
        spacing: {
            type: Number,
            default: 5
        },
        /**
         * @description 文本渐变颜色，只支持两种颜色，第一个为起始颜色，第二个为结束颜色
         */
        colors: {
            type: Array,
            default: () => ['#fff', '#1e80ff'],
            validator: (val) => {
                return val instanceof Array && val.length === 2;
            }
        }
    },
    computed: {
        spans() {
            return this.text.split('');
        },
        speed() {
            return 1 / this.spans.length;
        }
    }
}
</script>
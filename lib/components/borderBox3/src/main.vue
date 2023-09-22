<!--
 * @Autor: costa
 * @Date: 2023-09-21 16:12:26
 * @LastEditors: costa
 * @LastEditTime: 2023-09-21 16:36:58
 * @Description: 
 * @Copyright: © 2023 by costa. All rights reserved.
-->
<template>
    <border-container :class="ref" :ref="ref" :border-color="borderColor" :border-width="borderWidth"
        :background-color="backgroundColor">
        <border-title :ref="titleRef" :width="titleSize.width" :height="titleSize.height" :font-size="fontSize"
            :font-color="fontColor" :text-position="textPosition" :background-color="borderColor">{{ text }}</border-title>
        <slot></slot>
    </border-container>
</template>
<script>
import autoResize from '../../../mixin/autoResize';
import { BorderContainer, BorderTitle } from './border.style';

export default {
    name: 'EBorderBox3',
    components: {
        BorderContainer,
        BorderTitle
    },
    mixins: [autoResize],
    props: {
        /**
         * @description 边框颜色
         */
        borderColor: {
            type: String,
            default: "#00ecfb"
        },
        /**
         * @description 边框宽度
         */
        borderWidth: {
            type: Number,
            default: 2
        },
        /**
         * @description 背景色
         */
        backgroundColor: {
            type: String,
            default: '#00ecfb26'
        },
        /**
         * @description 标题字体大小
         */
        fontSize: {
            type: Number,
            default: 16
        },
        /**
         * @description 标题字体颜色
         */
        fontColor: {
            type: String,
            default: '#000'
        },
        /**
         * @description 标题位置
         */
        textPosition: {
            type: String,
            default: 'left'
        },
        /**
         * @description 标题文本
         */
        text: {
            type: String,
            default: '',
            validator(value) {
                return !!value;
            }
        }
    },
    data() {
        return {
            ref: 'e-border-box-3',
            titleRef: 'e-border-box-3-title',
            titleSize: {
                width: 0,
                height: 0
            }
        }
    },
    mounted() {
        this.$nextTick(_ => {
            const dom = this.$refs[this.titleRef];
            this.titleSize = {
                width: dom ? dom.$el.clientWidth : 0,
                height: dom ? dom.$el.clientHeight : 0
            }
        });
    }
}
</script>
<!--
 * @Autor: costa
 * @Date: 2023-07-26 17:58:20
 * @LastEditors: costa
 * @LastEditTime: 2023-09-21 16:12:25
 * @Description: 边框组件2
 * @Copyright: © 2023 by costa. All rights reserved.
-->
<template>
    <border-container :class="ref" :ref="ref" :border-color="borderColor" :border-width="borderWidth"
        :line-width="lineWidth" :background-color="backgroundColor">
        <slot></slot>
    </border-container>
</template>
<script>
import autoResize from '../../../mixin/autoResize';
import { BorderContainer } from './border.style';

export default {
    name: 'EBorderBox2',
    components: {
        BorderContainer
    },
    mixins: [autoResize],
    props: {
        /**
        * @description 边框颜色
        */
        borderColor: {
            type: String,
            default: "#4cc7f3"
        },
        /**
         * @description 边框宽度
         */
        borderWidth: {
            type: Number,
            default: 2
        },
        /**
         * @description 边框线长度
         */
        lineWidth: {
            type: Number,
            default: 10
        },
        /**
         * @description 背景色
         */
        backgroundColor: {
            type: String,
            default: 'rgba(76, 199, 243, 0.15)'
        }
    },
    data() {
        return {
            ref: 'e-border-box-2'
        }
    }
}
</script>
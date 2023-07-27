<!--
 * @Autor: costa
 * @Date: 2023-07-06 16:14:25
 * @LastEditors: costa
 * @LastEditTime: 2023-07-07 15:01:41
 * @Description: 边框1组件
 * @Copyright: © 2023 by costa. All rights reserved.
-->
<template>
    <border-box :class="ref" :ref="ref">
        <border-svg-container :height="height" :width="width">
            <defs>
                <linearGradient :id="uniqueId" x1='50%' y1='0%' x2='75%' y2='100%'>
                    <stop offset='0%' :stop-color="colors[0]">
                        <animate attributeName='stop-color' :values="`${colors[1]};${colors[0]};${colors[1]}`"
                            :dur="`${duration}s`" repeatCount='indefinite'>
                        </animate>
                    </stop>
                    <stop offset='100%' :stop-color="colors[1]">
                        <animate attributeName='stop-color' :values="`${colors[0]};${colors[1]};${colors[0]}`"
                            :dur="`${duration}s`" repeatCount='indefinite'>
                        </animate>
                    </stop>
                </linearGradient>
            </defs>
            <rect :x="borderWidth" :y="borderWidth" :rx="borderRadius" :height="height > 0 ? height - borderWidth
                * 2 : 0" :width="width > 0 ? width - borderWidth * 2 : 0" :stroke="`url('#${uniqueId}')`"
                fill='transparent' :stroke-width="borderWidth" />
        </border-svg-container>
        <border-content>
            <slot></slot>
        </border-content>
    </border-box>
</template>
<script>
import autoResize from '../../../mixin/autoResize';
import { BorderBox, BorderContent, BorderSvgContainer } from '../../styled/BorderBox';
import { genNonDuplicateID } from '../../../utils/common';
const startColor = '#5ddcff';
const endColor = '#4e00c2';

export default {
    name: 'EBorderBox1',
    components: {
        BorderBox,
        BorderContent,
        BorderSvgContainer
    },
    mixins: [autoResize],
    props: {
        /**
     * @description 边框圆角
     */
        borderRadius: {
            type: Number,
            required: false,
            default: 3
        },
        /**
         * @description 边框宽度
         */
        borderWidth: {
            type: Number,
            required: false,
            default: 3
        },
        /**
         * @description 渐变颜色
         */
        colors: {
            type: Array,
            required: false,
            default: () => [startColor, endColor],
            validator(value) {
                return value.length === 2
            }
        },
        /**
         * @description 动画持续时间
         */
        duration: {
            type: Number,
            required: false,
            default: 4
        }
    },
    data() {
        const uniqueId = genNonDuplicateID();
        return {
            ref: 'e-border-box-1',
            uniqueId
        }
    }
}
</script>
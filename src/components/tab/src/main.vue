<!--
 * @Autor: costa
 * @Date: 2023-07-18 15:00:35
 * @LastEditors: costa
 * @LastEditTime: 2023-07-18 17:34:34
 * @Description: Tab组件
 * @Copyright: © 2023 by costa. All rights reserved.
-->
<template>
    <tab-container :class="ref">
        <tab-content :ref="ref">
            <tab-item v-for="item in items" :class="selectedValue === item.value ? 'active' : ''" :key="item.value"
                :margin="margin" :width="itemSize.width" :height="itemSize.height" :duration="duration"
                :font-color="fontColor" :font-size="fontSize" :background-color="backgroundColor"
                @click="($event) => handleClick($event, item.value)" version="1.1" xmlns="http://www.w3.org/2000/svg"
                x="0px" y="0px">
                <defs>
                    <!-- 模糊 -->
                    <filter :id="`svg-blur-${symbolId}`" x="0" y="0" :width="itemSize.width"
                        :height="itemSize.height">
                        <feOffset result="offOut" in="SourceGraphic" dx="2" dy="2" />
                        <feGaussianBlur in="offOut" result="blurout" stdDeviation="5" />
                        <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
                    </filter>
                    <!-- 渐变颜色 -->
                    <linearGradient :id="`svg-gradient-${symbolId}`" gradientUnits="userSpaceOnUse" x1="0%" y1="100%"
                        x2="100%" y2="0%">
                        <stop v-for="(color, i) in borderColors" :key="i"
                            :offset="`${i / (borderColors.length - 1) * 100}%`" :stop-color="color" />
                    </linearGradient>
                </defs>
                <rect :filter="`url(#svg-blur-${symbolId})`" :stroke="`url(#svg-gradient-${symbolId})`" rx="10"></rect>
                <text :x="itemSize.width / 2" :y="itemSize.height / 2">{{ item.label }}</text>
            </tab-item>
        </tab-content>
    </tab-container>
</template>
<script>
import { TabContainer, TabContent, TabItem } from './tab';
import { genNonDuplicateID } from '../../../utils/common';
import autoResize from '../../../mixin/autoResize';

export default {
    name: 'ETab',
    components: {
        TabContainer,
        TabContent,
        TabItem
    },
    mixins: [autoResize],
    props: {
        /**
        * @description 当前值
        */
        value: {
            type: [String, Number],
            required: false
        },
        /**
         * @description tab item项
         */
        items: {
            type: Array,
            required: true,
            default: () => []
        },
        /**
         * @description 列数
         */
        columns: {
            type: Number,
            require: false,
            default: 3
        },
        /**
         * @description 间距
         */
        margin: {
            type: Number,
            require: false,
            default: 10
        },
        /**
         * @description 字号
         */
        fontSize: {
            type: Number,
            require: false,
            default: 16
        },
        /**
         * @description 字体颜色
         */
        fontColor: {
            type: String,
            require: false,
            default: '#fff'
        },
        /**
         * @description 背景颜色
         */
        backgroundColor: {
            type: String,
            require: false,
            default: 'transparent'
        },
        /**
         * @description 动画持续时间
         */
        duration: {
            type: Number,
            required: false,
            default: 3
        },
        /**
         * @description 边框渐变颜色
         */
        borderColors: {
            type: Array,
            required: false,
            default: () => ['#1CE3B6', '#1F38F1', '#F95A5A']
        }
    },
    data() {
        const symbolId = genNonDuplicateID();
        return {
            ref: 'e-tab',
            symbolId,
            selectedValue: undefined
        }
    },
    watch: {
        // 监听items变化，重新初始化选中值
        items() {
            this.initSelectedValue();
        },
        value(newValue) {
            this.selectedValue = newValue;
        }
    },
    computed: {
        itemSize() {
            const rows = Math.ceil(this.items.length / this.columns);
            return {
                width: this.width > 0 ? this.width / this.columns - this.margin * 2 : 0,
                height: this.height > 0 ? this.height / rows - this.margin * 2 : 0
            }
        }
    },
    mounted() {
        this.initSelectedValue();
    },
    methods: {
        initSelectedValue() {
            if (this.value) {
                this.selectedValue = this.value;
            }
            else if (this.items && this.items.length > 0) {
                this.selectedValue = this.items[0].value;
            }
        },
        handleClick(e, value) {
            e.stopPropagation();
            this.selectedValue = value;
            // 将选中值传递给父组件
            this.$emit('change', value);
        }
    }
}
</script>
<!--
 * @Autor: costa
 * @Date: 2023-08-04 16:04:38
 * @LastEditors: costa
 * @LastEditTime: 2023-09-21 15:51:23
 * @Description: 
 * @Copyright: © 2023 by costa. All rights reserved.
-->
<template>
    <tab-item :class="_tabGroup.selectedValue === value ? 'active' : ''" :key="value" :margin="_tabGroup.margin"
        :width="_tabGroup.itemSize.width" :height="_tabGroup.itemSize.height" :duration="_tabGroup.duration"
        :font-color="_tabGroup.fontColor" :font-size="_tabGroup.fontSize" :background-color="_tabGroup.backgroundColor"
        :symbolId="_tabGroup.symbolId" @click="($event) => handleClick($event, value)">
        <item-border version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px">
            <defs>
                <!-- 模糊 -->
                <filter :id="`svg-blur-${_tabGroup.symbolId}`" x="0" y="0" :width="_tabGroup.itemSize.width"
                    :height="_tabGroup.itemSize.height">
                    <feOffset result="offOut" in="SourceGraphic" dx="2" dy="2" />
                    <feGaussianBlur in="offOut" result="blurout" stdDeviation="5" />
                    <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
                </filter>
                <!-- 渐变颜色 -->
                <linearGradient :id="`svg-gradient-${_tabGroup.symbolId}`" gradientUnits="userSpaceOnUse" x1="0%" y1="100%"
                    x2="100%" y2="0%">
                    <stop v-for="(color, i) in _tabGroup.borderColors" :key="i"
                        :offset="`${i / (_tabGroup.borderColors.length - 1) * 100}%`" :stop-color="color" />
                </linearGradient>
            </defs>
            <rect :filter="`url(#svg-blur-${_tabGroup.symbolId})`" :stroke="`url(#svg-gradient-${_tabGroup.symbolId})`"
                rx="10"></rect>
        </item-border>
        <item-content>
            <item-icon>
                <slot name="icon"></slot>
            </item-icon>
            <item-text>
                <slot></slot>
            </item-text>
        </item-content>
    </tab-item>
</template>
<script>
import { TabItem, ItemBorder, ItemContent, ItemText, ItemIcon } from './item.style';
import Emitter from '../../../mixin/emitter';

export default {
    name: 'ETabItem',
    components: {
        TabItem,
        ItemBorder,
        ItemContent,
        ItemText,
        ItemIcon
    },
    mixins: [Emitter],
    props: {
        value: {
            type: [String, Number],
            required: true
        },
    },
    computed: {
        // 获取父组件的值
        _tabGroup() {
            let parent = this.$parent;
            while (parent) {
                if (parent.$options.name === 'ETab') {
                    return parent;
                }
                return parent.$parent;
            }
            return parent;
        }
    },
    methods: {
        handleClick(event, value) {
            this.$nextTick(() => {
                this.dispatch('ETab', 'handleChange', value);
            });
        }
    }
}
</script>
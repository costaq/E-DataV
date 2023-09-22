<!--
 * @Autor: costa
 * @Date: 2023-07-18 15:00:35
 * @LastEditors: costa
 * @LastEditTime: 2023-09-21 15:51:06
 * @Description: Tab组件
 * @Copyright: © 2023 by costa. All rights reserved.
-->
<template>
    <tab-container :class="ref" :ref="ref" :symbolId="symbolId" :length="itemSize.width + itemSize.height">
        <slot></slot>
    </tab-container>
</template>
<script>
import { TabContainer } from './tab.style';
import { genNonDuplicateID } from '../../../utils/common';
import autoResize from '../../../mixin/autoResize';

export default {
    name: 'ETab',
    components: {
        TabContainer
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
            selectedValue: undefined,
            itemSize: {
                width: 0,
                height: 0
            },
            items: []
        }
    },
    watch: {
        value(newValue) {
            this.selectedValue = newValue;
        }
    },
    created() {
        this.$on('handleChange', value => {
            this.selectedValue = value;
            this.$emit('change', value);
        });
    },
    mounted() {
        this.initItemSize();
        this.initSelectedValue();
    },
    methods: {
        initItemSize() {
            this.$nextTick(() => {
                const children = this.$children[0].$children;
                this.items = children;
                const rows = Math.ceil(children.length / this.columns);
                this.itemSize.width = this.width > 0 ? this.width / this.columns - this.margin * 2 : 0;
                this.itemSize.height = this.height > 0 ? this.height / rows - this.margin * 2 : 0;
            });
        },
        initSelectedValue() {
            this.$nextTick(() => {
                if (this.value) {
                    this.selectedValue = this.value;
                }
                else if (this.items && this.items.length > 0) {
                    this.selectedValue = this.items[0].value;
                }
            });
        }
    }
}
</script>
<!--
 * @Autor: costa
 * @Date: 2023-08-22 14:39:11
 * @LastEditors: costa
 * @LastEditTime: 2023-09-14 17:24:37
 * @Description: 
 * @Copyright: © 2023 by costa. All rights reserved.
-->
<template>
    <board-container :ref="ref" :class="ref">
        <board-item v-for="(item, index) in domData" :key="item.label + item.ranking + item.scroll" :height="item.height"
            :color="color" @click="() => handleRowClick(item, index)">
            <board-item-icon :font-size="rankingFontSize" :color="getHighlightColor(item)">No.{{ item.ranking }}</board-item-icon>
            <board-item-label :font-size="labelFontSize">{{ item.label }}</board-item-label>
            <board-item-value :font-size="valueFontSize">{{ item.value }}</board-item-value>
            <board-item-shadow v-if="highlightRowNum >= item.ranking" :color="getHighlightColor(item)"></board-item-shadow>
        </board-item>
    </board-container>
</template>
<script>
import { BoardItem, BoardContainer, BoardItemIcon, BoardItemLabel, BoardItemValue, BoardItemShadow } from './board';
import autoResize from '../../../mixin/autoResize';

export default {
    name: 'EScrollRankingBoard',
    mixins: [autoResize],
    components: {
        BoardItem,
        BoardContainer,
        BoardItemIcon,
        BoardItemLabel,
        BoardItemValue,
        BoardItemShadow
    },
    props: {
        /**
     * @description 数据
     */
        items: {
            type: Array,
            default: () => []
        },
        /**
         * @description 显示的行数
         */
        rowNum: {
            type: Number,
            default: 5
        },
        /**
         * @description 滚动间隔
         */
        interval: {
            type: Number,
            default: 3000
        },
        /**
         * @description 滚动类型
         */
        type: {
            type: String,
            default: 'single',
            validator(value) {
                return ['single', 'page'].includes(value);
            }
        },
        /**
         * @description 高亮行数
         */
        highlightRowNum: {
            type: Number,
            default: 3
        },
        /**
         * @description 高亮颜色
        */
        highlightColors: {
            type: Array,
            default: () => ['#1e80ff', '#4cc7f3', '#CDDC39']
        },
        /**
         * @description 排名字号
         */
        rankingFontSize: {
            type: Number,
            default: 18
        },
        /**
         * @description 文本字号
         */
        labelFontSize: {
            type: Number,
            default: 14
        },
        /**
         * @description 值字号
         */
        valueFontSize: {
            type: Number,
            default: 18
        },
        /**
         * @description 字体颜色
         */
        color: {
            type: String,
            default: '#fff'
        }
    },
    data() {
        return {
            ref: 'e-scroll-ranking-board',
            timer: null,
            // 平均高度
            avgHeight: 0,
            // 所有数据
            allData: [],
            // 显示的数据
            domData: [],
        };
    },
    mounted() {
        this.$nextTick(() => {
            const dom = this.$refs[this.ref];
            dom?.$el.addEventListener('mouseenter', () => {
                clearInterval(this.timer);
            });

            dom?.$el.addEventListener('mouseleave', () => {
                this.animation();
            });
        });
    },
    computed: {
        /**
         * @description 滚动行数
         */
        scrollNum() {
            return this.type === 'single' ? 1 : this.rowNum;
        },
        /**
         * @description 高亮颜色
         */
        defaultHighlightColor() {
            return this.highlightColors[this.highlightRowNum - 1];
        },
    },
    watch: {
        // 监听dom尺寸变化, 重新计算每个item的高度
        height(newVal) {
            clearTimeout(this.timer);
            const itemHeight = newVal / this.rowNum;
            this.avgHeight = itemHeight;
            this.initData();
        },
    },
    methods: {
        getHighlightColor(item) {
            return this.highlightRowNum >= item.ranking ? (this.highlightColors[item.ranking - 1] || this.defaultHighlightColor) : this.color;
        },
        // 点击行
        handleRowClick(item, rowIndex) {
            // 不将height属性暴露出去
            Reflect.deleteProperty(item, 'height');
            this.$emit('row-click', item, rowIndex);
        },
        // 初始化值并开始动画
        initData() {
            let newData = [...this.items];
            newData = newData.sort((a, b) => b.value - a.value);
            newData = newData.map((item, index) => ({ ...item, height: this.avgHeight, ranking: index + 1, scroll: index }));
            this.allData = newData;
            this.domData = newData.slice(0, this.rowNum);

            this.animation();
        },
        // 滚动动画
        animation() {
            // 若记录数小于等于显示行数, 则不滚动
            if (this.allData.length <= this.rowNum) return;
            this.timer = setInterval(() => {
                let newData = [...this.allData];
                // 将即将要删除的元素高度设置为0
                newData.forEach((item, i) => {
                    if (i < this.scrollNum) {
                        item.height = 0;
                    }
                });
                // 将即将要删除的数据添加到最后
                newData = [...newData, ...newData.slice(0, this.scrollNum).map((item) => ({ ...item, height: this.avgHeight, scroll: item.scroll + this.rowNum }))];
                // 新数据保存到allData中
                this.allData = newData;
                // domData重新计算
                this.domData = newData.slice(0, this.rowNum + this.scrollNum);

                // 300ms后分别将allData及domData中需要删除的删除
                setTimeout(() => {
                    newData = [...this.allData];
                    // 删除数组中需要删除的元素
                    newData = newData.slice(this.scrollNum);

                    this.allData = newData;

                    newData = [...this.domData];
                    // 删除数组中需要删除的元素
                    newData = newData.slice(this.scrollNum);

                    this.domData = newData;
                }, 300);

            }, this.interval);
        },
    }
}
</script>
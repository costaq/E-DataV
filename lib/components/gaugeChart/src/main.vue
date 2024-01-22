<template>
    <gauge-container :ref="ref" :class="ref">
        <graduate v-for="(item, i) in Array.from({ length: 100 })" :key="i" :parent-size="minSize" :deg="calcDeg(i)"
            :bg="value > i ? `hsl(${calcDeg(i)}, 100%, 50%)` : '#000'" />
        <gauge-text :font-size="valueFontSize" :color="`hsl(${calcDeg(value)}deg, 100%, 50%)`">
            {{ value }}
        </gauge-text>
    </gauge-container>
</template>
<script>
import { GaugeContainer, GaugeText, Graduate } from './gaugeChart.style';
import autoResize from '../../../mixin/autoResize';
import { animation } from '../../../utils/animation';

export default {
    name: 'EGaugeChart',
    mixins: [autoResize],
    components: {
        GaugeContainer,
        GaugeText,
        Graduate
    },
    props: {
        /**
        * @description 百分比值
        */
        value: {
            type: Number,
            required: true,
            default: 0,
            validator: (val) => {
                return val >= 0 && val <= 100;
            }
        },
        /**
         * @description 数值字体大小
         */
         valueFontSize: {
            type: Number,
            required: false,
            default: 30
        },
    },
    data() {
        return {
            ref: 'e-gauge-chart',
            displayVal: '0%',
            startVal: 0
        }
    },
    mounted() {
        this.start();
    },
    computed: {
        // 宽高的最小值
        minSize() {
            return Math.min(this.width, this.height);
        }
    },
    watch: {
        // 监听值的变化，重新开始动画
        value(newVal, oldValue) {
            this.startVal = oldValue;
            this.start();
        }
    },
    methods: {
        // 动画开始
        start() {
            animation(1000, this.startVal, this.value, (curValue) => {
                this.displayVal = this.formatVal(curValue);
            });
        },
        formatVal(val) {
            return `${(+val).toFixed(0)}%`;
        },
        // 计算角度
        calcDeg(i) {
            return i / 100 * 360;
        }
    }
}
</script>
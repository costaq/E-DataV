<template>
    <span :style="styles">{{ displayVal }}</span>
</template>
<script>
import { animation } from '../../../utils/animation';

export default {
    name: 'EDigitalFlop',
    props: {
        /**
         * @description 终止值
         */
        value: {
            type: Number,
            required: false,
            default: 1000
        },
        /**
         * @description 小数点保留几位
         */
        decimals: {
            type: Number,
            required: false,
            default: 0,
            validator(value) {
                return value >= 0
            }
        },
        /**
         * @description 持续时间
         */
        duration: {
            type: Number,
            required: false,
            default: 3000
        },
        /**
         * @description 字体大小
         */
        fontSize: {
            type: Number,
            required: false,
            default: 50
        },
        /**
         * @description 字体库 内置 electronic
         */
        fontFamily: {
            type: String,
            required: false,
            default: 'electronic'//'electronic'
        },
        /**
         * @description 字体颜色
         */
        color: {
            type: String,
            required: false,
            default: '#000'
        },
        /**
         * @description 千位分隔符
         */
        separator: {
            type: String,
            required: false,
            default: ''
        }
    },
    data() {
        return {
            /**
             * @description 显示值
             * @type {Number}
             * @default displayVal = 0
             */
            displayVal: 0,
            /**
             * @description 动画默认开始值
             */
            startVal: 0
        }
    },
    computed: {
        /**
         * @description 计算样式
         */
        styles() {
            return {
                fontFamily: `${this.fontFamily}`,
                fontSize: `${this.fontSize}px`,
                color: this.color
            }
        }
    },
    watch: {
        // 若传入值发生变化，则将上一次的结果赋给开始值，然后开始动画
        value(newVal, oldVal) {
            this.startVal = oldVal;
            this.start();
        }
    },
    mounted() {
        this.start();
    },

    methods: {
        start() {
            animation(this.duration, this.startVal, this.value, (value) => {
                this.displayVal = this.formatVal(value);
            });
        },
        /**
         * @description 转换显示值
         * @param {*} val 
         */
        formatVal(val) {
            const num = val.toFixed(this.decimals);
            const numStr = String(num);
            const x = numStr.split('.');
            // 整数部分
            let x1 = x[0];
            // 小数点部分
            const x2 = x.length > 1 ? `.${x[1]}` : '';
            // 数字后面是三位数字
            const rgx = /(\d+)(\d{3})/;
            // 有分隔符并且非数字
            if (this.separator && typeof this.separator !== 'number') {
                while (rgx.test(x1)) {
                    x1 = x1.replace(rgx, '$1' + this.separator + '$2');
                }
            }
            return `${x1}${x2}`;
        }
    }
}
</script>
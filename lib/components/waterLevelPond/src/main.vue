<template>
    <div class="e-water-level-pond">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" style="display: none;">
            <symbol :id="uniqueId">
                <path
                    d="M420,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C514,6.5,518,4.7,528.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H420z">
                </path>
                <path
                    d="M420,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C326,6.5,322,4.7,311.5,2.7C304.3,1.4,293.6-0.1,280,0c0,0,0,0,0,0v20H420z">
                </path>
                <path
                    d="M140,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C234,6.5,238,4.7,248.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H140z">
                </path>
                <path
                    d="M140,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C46,6.5,42,4.7,31.5,2.7C24.3,1.4,13.6-0.1,0,0c0,0,0,0,0,0l0,20H140z">
                </path>
            </symbol>
        </svg>
        <box-container :height="height" :width="width" :fontSize="fontSize" :fontColor="fontColor"
            :backgroundColor="backgroundColor" :waveColors="waveColors">
            <div class="percent">
                <div class="value">{{displayVal}}</div>
                <div class="suffix">%</div>
            </div>
            <div ref="waterDom" class="water">
                <svg viewBox="0 0 560 20" class="water_wave water_wave_back">
                    <use :href="`#${uniqueId}`"></use>
                </svg>
                <svg viewBox="0 0 560 20" class="water_wave water_wave_front">
                    <use :href="`#${uniqueId}`"></use>
                </svg>
            </div>
        </box-container>
    </div>
</template>
<script>
import { BoxContainer } from './boxContainer';
import { genNonDuplicateID } from '../../../utils/common';
import { animation } from '../../../utils/animation';

export default {
    name: 'EWaterLevelPond',
    components: {
        BoxContainer
    },
    props: {
        /**
     * @description 宽度，若不传值，则为100%
     */
        width: {
            type: Number,
            required: false
        },
        /**
         * @description 高度，若不传值，则为100%
         */
        height: {
            type: Number,
            required: false
        },
        /**
         * @description 当前值
         */
        value: {
            type: Number,
            required: true,
            default: 100,
            validator(value) {
                return value <= 100
            }
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
         * @description 字体字号
         */
        fontSize: {
            type: Number,
            required: false,
            default: 36
        },
        /**
         * @description 字体颜色
         */
        fontColor: {
            type: String,
            required: false,
            default: '#fff'
        },
        /**
         * @description 背景色
         */
        backgroundColor: {
            type: String,
            required: false,
            default: 'transparent'
        },
        /**
         * @description 波浪颜色
         */
        waveColors: {
            type: Array,
            required: false,
            default: () => ['#41a9e3', '#b0e0ff'],
            validator(value) {
                return value.length === 2
            }
        }
    },
    data() {
        const uniqueId = genNonDuplicateID();
        return {
            uniqueId,
            displayVal: 0,
            startVal: 0
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
                // 通过tranalate改变定位
                this.$refs["waterDom"].style.transform = `translate(0, ${100 - value}%)`;
                this.displayVal = +value.toFixed(this.decimals);
            });
        }
    } 
}
</script>
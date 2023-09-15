import Vue from "vue";
import { EDataVComponent } from "./component";

export  declare class EDigitalFlop extends EDataVComponent {
    /**
    * @description 终止值
    */
    value?: number;
    /**
     * @description 小数点保留几位
     */
    decimals?: number;
    /**
     * @description 持续时间
     */
    duration?: number;
    /**
     * @description 字体大小
     */
    fontSize?: number;
    /**
     * @description 字体库 内置 electronic
     */
    fontFamily?: string;
    /**
     * @description 字体颜色
     */
    color?: string;
    /**
     * @description 千位分隔符
     */
    separator?: string;
}
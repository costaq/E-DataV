import Vue from "vue";
import { EDataVComponent } from "./component";

export  declare class EDynamicText extends EDataVComponent {
    /**
     * @description 文字
     */
    text: string;
    /**
     * @description 左右间距
     */
    spacing?: number;
    /**
     * @description 文本渐变颜色，只支持两种颜色，第一个为起始颜色，第二个为结束颜色
     */
    colors?: string[];
}
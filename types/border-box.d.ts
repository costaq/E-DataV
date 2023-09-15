import Vue from "vue";
import { EDataVComponent } from "./component";

export declare class EBorderBox1 extends EDataVComponent {
    /**
     * @description 边框圆角
     */
    borderRadius?: number;
    /**
     * @description 边框宽度
     */
    borderWidth?: number;
    /**
     * @description 渐变颜色
     */
    colors?: string[];
    /**
     * @description 动画持续时间
     */
    duration?: number;
}

export declare class EBorderBox2 extends EDataVComponent {
    /**
    * @description 边框颜色
    */
    borderColor?: string;
    /**
     * @description 边框宽度
     */
    borderWidth?: number;
    /**
     * @description 边框线长度
     */
    lineWidth?: number;
    /**
     * @description 背景色
     */
    backgroundColor?: string;
}
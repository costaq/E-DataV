/*
 * @Autor: costa
 * @Date: 2023-09-14 16:32:45
 * @LastEditors: costa
 * @LastEditTime: 2023-09-21 16:51:55
 * @Description: 
 * @Copyright: © 2023 by costa. All rights reserved.
 */
import Vue from "vue";
import { EDataVComponent } from "./component";

export type TextPosition = 'left' | 'center' | 'right';

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

export declare class EBorderBox3 extends EDataVComponent {
    /**
    * @description 边框颜色
    */
    borderColor?: string;
    /**
     * @description 边框宽度
     */
    borderWidth?: number;
    /**
     * @description 背景色
     */
    backgroundColor?: string;
    /**
     * @description 标题字体大小
     */
    fontSize?: number;
    /**
     * @description 标题字体颜色
     */
    fontColor?: string;
    /**
     * @description 标题位置
     */
    textPosition?: TextPosition;
    /**
     * @description 标题文本
     */
    text: string;
}
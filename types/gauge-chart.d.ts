/*
 * @Autor: costa
 * @Date: 2024-01-22 14:53:35
 * @LastEditors: costa
 * @LastEditTime: 2024-01-22 14:54:40
 * @Description: 
 * @Copyright: © 2023 by costa. All rights reserved.
 */
import Vue from "vue";
import { EDataVComponent } from "./component";

export  declare class EGaugeChart extends EDataVComponent {
    /**
     * @description 百分比值
     */
    value: number;
    /**
     * @description 数值字体大小
     */
    valueFontSize: number;
}
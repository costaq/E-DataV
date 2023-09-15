import Vue from "vue";
import { EDataVComponent } from "./component";
export type TabItemValue = string | number;

export  declare class ETab extends EDataVComponent {
    /**
     * @description 当前值
     */
    value?: TabItemValue;
    /**
     * @description tab item项
     */
    items: TabItem[];
    /**
     * @description 列数
     */
    columns?: number;
    /**
     * @description 间距
     */
    margin?: number;
    /**
     * @description 字号
     */
    fontSize?: number;
    /**
     * @description 字体颜色
     */
    fontColor?: string;
    /**
     * @description 背景颜色
     */
    backgroundColor?: string;
    /**
     * @description 动画持续时间
     */
    duration?: number;
    /**
     * @description 边框渐变颜色
     */
    borderColors?: string[];
}
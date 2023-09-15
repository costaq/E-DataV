import Vue from "vue";
import { EDataVComponent } from "./component";

export export type ScrollRankingBoardItem = {
    label: string;
    value: number;
    [key: string]: any;
}

export declare class EScrollRankingBoard extends EDataVComponent {
    /**
    * @description 数据
    */
    items: ScrollRankingBoardItem[];
    /**
     * @description 显示的行数
     */
    rowNum?: number;
    /**
     * @description 文本字号
     */
    labelFontSize?: number;
    /**
     * @description 值字号
     */
    valueFontSize?: number;
    /**
     * @description 排名字号
     */
    rankingFontSize?: number;
    /**
     * @description: 颜色
     */
    color?: string;
    /**
     * @description 高亮颜色
     */
    highlightColors?: string[];
    /**
     * @description 高亮行数
     */
    highlightRowNum?: number;
    /**
     * @description 滚动间隔
     */
    interval?: number;
    /**
     * @description 滚动类型
     */
    type?: 'single' | 'page';
}
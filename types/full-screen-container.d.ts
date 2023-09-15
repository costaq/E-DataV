import Vue from "vue";
import { EDataVComponent } from "./component";

/**
 * @description full 全部拉伸 | full-width 宽度拉伸 | full-height 高度拉伸 | initial 初始化默认不拉伸
 */
export type FullScreenType = 'full' | 'full-width' | 'full-height' | 'initial';

export  declare class EFullScreenContainer extends EDataVComponent {
    /**
     * @description 大屏设计稿宽度
     */
    width?: number;
    /**
     * @description 大屏设计稿高度
     */
    height?: number;
    /**
     * @description 全屏模式
     */
    type?: FullScreenType;
}
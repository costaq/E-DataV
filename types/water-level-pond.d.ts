import Vue from "vue";
import { EDataVComponent } from "./component";

export  declare class EWaterLevelPond extends EDataVComponent {
   /**
     * @description 宽度，若不传值，则为100%
     */
   height?: number;
   /**
    * @description 高度，若不传值，则为100%
    */
   width?: number;
   /**
    * @description 当前值
    */
   value: number;
   /**
    * @description 小数点保留几位
    */
   decimals?: number;
   /**
    * @description 持续时间
    */
   duration?: number;
   /**
    * @description 字体字号
    */
   fontSize?: number;
   /**
    * @description 字体颜色
    */
   fontColor?: string;
   /**
    * @description 背景色
    */
   backgroundColor?: string;
   /**
    * @description 波浪颜色
    */
   waveColors?: Array<string>;
}
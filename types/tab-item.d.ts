import Vue from "vue";
import { EDataVComponent } from "./component";
import { TabItemValue } from './tab';

export  declare class ETabItem extends EDataVComponent {
    /**
     * @description 显示值
     */
    label: string;
    /**
     * @description 选中值
     */
    value: TabItemValue;
}
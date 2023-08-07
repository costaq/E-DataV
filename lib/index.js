
export { default as EBorderBox1 } from './components/borderBox1';
export { default as EBorderBox2 } from './components/borderBox2';
export { default as EDigitalFlop } from './components/digitalFlop';
export { default as EFullScreenContainer } from './components/fullScreenContainer';
export { default as ETab } from './components/tab';
export { default as ETabItem } from './components/tabItem';
export { default as EWaterLevelPond } from './components/waterLevelPond';
/*
 * @Autor: costa
 * @Date: 2023-04-04 11:03:48
 * @LastEditors: costa
 * @LastEditTime: 2023-08-04 17:36:02
 * @Description: 
 * @Copyright: © 2023 by costa. All rights reserved.
 */
import EDigitalFlop from './components/digitalFlop';
import EFullScreenContainer from './components/fullScreenContainer';
import EBorderBox1 from './components/borderBox1';
import EBorderBox2 from './components/borderBox2';
import EWaterLevelPond from './components/waterLevelPond';
import ETab from './components/tab';
import ETabItem from './components/tabItem';
import * as GlobalStyle from './components/styled/GlobalStyle';

export default function (Vue) {
    Vue.use(EDigitalFlop);
    Vue.use(EFullScreenContainer);
    Vue.use(EBorderBox1);
    Vue.use(EBorderBox2);
    Vue.use(EWaterLevelPond);
    Vue.use(ETab);
    Vue.use(ETabItem);
}
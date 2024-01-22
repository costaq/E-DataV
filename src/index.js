/*
 * @Autor: costa
 * @Date: 2023-04-04 11:03:48
 * @LastEditors: costa
 * @LastEditTime: 2024-01-22 15:17:50
 * @Description: 
 * @Copyright: © 2023 by costa. All rights reserved.
 */
import EDigitalFlop from './components/digitalFlop';
import EFullScreenContainer from './components/fullScreenContainer';
import EBorderBox1 from './components/borderBox1';
import EBorderBox2 from './components/borderBox2';
import EBorderBox3 from './components/borderBox3';
import EWaterLevelPond from './components/waterLevelPond';
import ETab from './components/tab';
import ETabItem from './components/tabItem';
import EScrollRankingBoard from './components/scrollRankingBoard';
import EDynamicText from './components/dynamicText';
import ELoading from './components/loading';
import EGaugeChart from './components/gaugeChart';
import * as GlobalStyle from './components/styled/GlobalStyle';

export default function (Vue) {
    Vue.use(EDigitalFlop);
    Vue.use(EFullScreenContainer);
    Vue.use(EBorderBox1);
    Vue.use(EBorderBox2);
    Vue.use(EBorderBox3);
    Vue.use(EWaterLevelPond);
    Vue.use(ETab);
    Vue.use(ETabItem);
    Vue.use(EScrollRankingBoard);
    Vue.use(EDynamicText);
    Vue.use(ELoading);
    Vue.use(EGaugeChart);
}
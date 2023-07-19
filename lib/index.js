
export { default as EBorderBox1 } from './components/border-box-1';
export { default as EDigitalFlop } from './components/digitalFlop';
export { default as EFullScreenContainer } from './components/fullScreenContainer';
export { default as ETab } from './components/tab';
export { default as EWaterLevelPond } from './components/waterLevelPond';
import EDigitalFlop from './components/digitalFlop';
import EFullScreenContainer from './components/fullScreenContainer';
import EBorderBox1 from './components/border-box-1';
import EWaterLevelPond from './components/waterLevelPond';
import ETab from './components/tab';
import * as GlobalStyle from './components/styled/GlobalStyle';

export default function (Vue) {
    Vue.use(EDigitalFlop);
    Vue.use(EFullScreenContainer);
    Vue.use(EBorderBox1);
    Vue.use(EWaterLevelPond);
    Vue.use(ETab);
}
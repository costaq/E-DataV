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
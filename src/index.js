import EDigitalFlop from './components/digitalFlop';
import EFullScreenContainer from './components/fullScreenContainer';
import EBorderBox1 from './components/borderBox1';
import EBorderBox2 from './components/borderBox2';
import EWaterLevelPond from './components/waterLevelPond';
import ETab from './components/tab';
import * as GlobalStyle from './components/styled/GlobalStyle';

export default function (Vue) {
    Vue.use(EDigitalFlop);
    Vue.use(EFullScreenContainer);
    Vue.use(EBorderBox1);
    Vue.use(EBorderBox2);
    Vue.use(EWaterLevelPond);
    Vue.use(ETab);
}
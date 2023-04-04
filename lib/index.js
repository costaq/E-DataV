
export { default as DigitalFlop } from './components/digitalFlop';
export { default as FullScreenContainer } from './components/fullScreenContainer';
import DigitalFlop from './components/digitalFlop';
import FullScreenContainer from './components/fullScreenContainer';

export default function (Vue) {
    Vue.use(DigitalFlop);
    Vue.use(FullScreenContainer);
}
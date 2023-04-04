import Vue from 'vue'
import App from './App.vue'
import { DigitalFlop, FullScreenContainer } from 'e-datav';
// import EDataV from 'e-datav';

Vue.config.productionTip = false

Vue.use(DigitalFlop);
Vue.use(FullScreenContainer);
// Vue.use(EDataV);

new Vue({
  render: h => h(App),
}).$mount('#app')

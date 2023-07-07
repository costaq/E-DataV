/*
 * @Autor: costa
 * @Date: 2023-04-04 11:04:29
 * @LastEditors: costa
 * @LastEditTime: 2023-07-07 17:05:55
 * @Description: 
 * @Copyright: © 2023 by costa. All rights reserved.
 */
import Vue from 'vue'
import App from './App.vue'
// import { EDigitalFlop, EFullScreenContainer, EBorderBox1 } from 'e-datav';
import EDataV from 'e-datav';

Vue.config.productionTip = false

// Vue.use(EBorderBox1);
// Vue.use(EDigitalFlop);
// Vue.use(EFullScreenContainer);
Vue.use(EDataV);

new Vue({
  render: h => h(App),
}).$mount('#app')

/*
 * @Autor: costa
 * @Date: 2023-04-04 11:04:29
 * @LastEditors: costa
 * @LastEditTime: 2023-04-04 11:33:41
 * @Description: 
 * @Copyright: © 2023 by costa. All rights reserved.
 */
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

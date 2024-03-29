/*
 * @Autor: costa
 * @Date: 2023-04-04 11:04:29
 * @LastEditors: costa
 * @LastEditTime: 2024-01-22 15:18:19
 * @Description: 
 * @Copyright: © 2023 by costa. All rights reserved.
 */
import Vue from 'vue'
import App from './App.vue'
import { EDigitalFlop, EFullScreenContainer, EBorderBox1, EBorderBox2, EBorderBox3, EWaterLevelPond, ETab, ETabItem, EScrollRankingBoard, EDynamicText, EGaugeChart } from 'e-datav';
import { Icon } from 'ant-design-vue';
// import EDataV from 'e-datav';

Vue.config.productionTip = false

Vue.use(Icon);

Vue.use(ETab);
Vue.use(ETabItem);
Vue.use(EBorderBox1);
Vue.use(EBorderBox2);
Vue.use(EBorderBox3);
Vue.use(EDigitalFlop);
Vue.use(EFullScreenContainer);
Vue.use(EWaterLevelPond);
Vue.use(EScrollRankingBoard);
Vue.use(EDynamicText);
Vue.use(EGaugeChart);
// Vue.use(EDataV);

new Vue({
  render: h => h(App),
}).$mount('#app')

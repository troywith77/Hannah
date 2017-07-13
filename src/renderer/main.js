import Vue from 'vue';
import axios from 'axios';
import settings from 'electron-settings'

import App from './App';
import router from './router';
import store from './store';

import './element-ui';

if (!process.env.IS_WEB) Vue.use(require('vue-electron'));
Vue.http = Vue.prototype.$http = axios;
Vue.config.productionTip = false;

settings.set('skin', 'skin-light')
if(settings.get('skin')) {
  document.querySelector('html').classList.add(settings.get('skin'))
}
setTimeout(() => {
  settings.set('skin', undefined)
}, 5000)

// new Notification('7x24', {
//   subtitle: '选股宝',
//   body: '大新闻啊大新闻',
//   silent: false,
// });

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>',
}).$mount('#app');

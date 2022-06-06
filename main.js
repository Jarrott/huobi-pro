import App from './App';
import {
	initVueI18n
	} from '@dcloudio/uni-i18n';
import store from '@/store/index.js';
import language from './locale/index.js'
import VueClipBoard from 'vue-clipboard2';
import wsMixin from './utils/wsMixin.js'

const {	t } = initVueI18n(language);
// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
Vue.prototype.t = t;
Vue.use(VueClipBoard);
Vue.mixin(wsMixin)
Vue.prototype.to = function(url) {
	uni.navigateTo({
		url,
	})
}
const app = new Vue({
    ...App,
		store,
})
app.$mount()

// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
app.config.globalProperties.t = t;
// #endif
import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/gloable.css'
// import 'font-awesome/css/font/font-awesome.min.css'
require('../node_modules/font-awesome/css/font-awesome.min.css');
// import './assets/font-awesome-4.7.0/css/font-awesome.css'
import AmazeVue from 'amaze-vue';
import 'amaze-vue/dist/amaze-vue.css';


Vue.use(AmazeVue);



import Axios from "axios";

Axios.defaults.baseURL = 'http://127.0.0.1:5000/';

Vue.config.productionTip = false;

Vue.use(ElementUI);


Vue.prototype.$axios = Axios;

new Vue({
  render: h => h(App),
}).$mount('#app');

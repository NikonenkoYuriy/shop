import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuelidate from 'vuelidate'
import vuetify from './plugins/vuetify';
import router from './router/index';

import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/css/style.css'

import App from './App.vue'


Vue.use(Vuelidate)
Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')

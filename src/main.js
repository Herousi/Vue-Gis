/*
 * @Author: your name
 * @Date: 2019-01-07 09:48:49
 * @LastEditTime: 2019-12-18 22:14:30
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /Vue-Gis/src/main.js
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'material-design-icons/iconfont/material-icons.css';
import router from './router'
import App from './App'
import store from './vuex/store.js'
import Common from './../static/script/common.js'
import './validator/validator.js'

Vue.use(ElementUI)
Vue.use(Common) //公共方法
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

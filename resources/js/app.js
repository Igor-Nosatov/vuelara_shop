
require('./bootstrap');
window.Vue = require('vue');

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';

import App from './App.vue';
Vue.use(VueAxios, axios);

Vue.component('header-component', require('./parts/HeaderComponent.vue'));
Vue.component('subscription-component', require('./parts/SubscriptionComponent.vue'));
Vue.component('footer-component', require('./parts/FooterComponent.vue'));

//import BlogComponentComponent from './components/BlogComponent.vue';
//import BlogPageComponent from './components/BlogPageComponent.vue';
//import CartComponent from './components/CartComponent.vue';
//import ContactComponent from './components/ContactComponent.vue';
import HomeComponent from './components/HomeComponent.vue';
//import ProductComponent from './components/ProductComponent.vue';
//import ShopComponent from './components/ShopComponent.vue';

const routes = [
  // {
  //    name: 'blog',
  //    path: '/blog',
  //    component: BlogComponent
    //},
    //{
      //  name: 'blog_page',
      //  path: '/blog/:id',
      //  component: BlogPageComponent
    //},
  //  {
  //      name: 'cart',
  //      path: '/cart',
    //    component: CartComponent
    //},
  //  {
    //    name: 'contact',
    //    path: '/contact',
    //    component: ContactComponent
    //},
    {
       name: 'home',
        path: '/',
        component: HomeComponent
    }
    //{
    //    name: 'shop',
    //    path: '/shop',
      //  component: ShopComponent
  //  },
    //{
    //    name: 'product',
      //  path: '/product/:id',
      //  component: ProductComponent
    //}

];

const router = new VueRouter({ mode: 'history', routes: routes});
const app = new Vue(Vue.util.extend({ router }, App)).$mount('#app');

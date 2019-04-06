import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import About from './components/About/About';
import Works from './components/Works/Works';
import Reviews from './components/Reviews/Reviews';
import Login from './components/Login/Login';


const router = new VueRouter({
  // mode: 'history',
  // linkActiveClass: "active",
  routes: [
    { path: '/', component: About },
    { path: '/works', component: Works },
    { path: '/reviews', component: Reviews },
    { path: '/login', component: Login }
  ]
});

export default router;



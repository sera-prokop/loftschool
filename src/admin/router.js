import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import About from './components/pages/About/About';
import Works from './components/pages/Works/Works';
import Reviews from './components/pages/Reviews/Reviews';
import Login from './components/pages/Login/Login'; 


const router = new VueRouter({
  // mode: 'history',
  // linkActiveClass: "active",
  routes: [
    { path: '/about', component: About },
    { path: '/works', component: Works },
    { path: '/reviews', component: Reviews },
    { path: '/login', component: Login }
  ]
});

export default router;



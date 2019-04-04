import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import About from './components/About/About';
import Works from './components/Works/Works';
import Reviews from './components/Reviews/Reviews';


const router = new VueRouter({
  mode: 'history',
  // linkActiveClass: "active",
  routes: [
    { path: '/admin', component: About },
    { path: '/works', component: Works },
    { path: '/reviews', component: Reviews }
  ]
});

export default router;



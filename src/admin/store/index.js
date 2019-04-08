import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


import about from './modules/about';
import skills from './modules/skills';

export default new Vuex.Store({
    modules: {
        about, skills
    }
})

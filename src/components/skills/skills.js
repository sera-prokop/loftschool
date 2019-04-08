import Vue from 'vue';
import {mapActions} from "vuex";

const skill = {
  template: '#skill',
  props: {
    skillName: String,
    skillPercent: Number
  }
};

const skillsList = {
  template: '#skills-list',
  components: {
    skill
  },
  props: {
    skill: Object
  }
};

import store from '../../admin/store';


new Vue({
  el: '#skills-component',
  store,
  template: '#skills-wrap',
  components: {
    skillsList
  },
  data() {
    return {
      skills: {}
    }
  },
  methods: {
    ...mapActions("skills", ["getSkillAction"]),
    async test(){
      try {

        const response = await this.getSkillAction();
        console.log('response');

      } catch (error) {
        console.log('test1')
        console.log(error.message);

      }
    }
  },
  async created() {
    try {

      const response = await this.getSkillAction();
      console.log(response);

    } catch (error) {

      console.log(error.message);

    }
    // const data = require("../../data/skills.json");
    // this.skills = data;
  }
});

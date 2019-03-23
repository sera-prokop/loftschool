import Vue from 'vue';

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

new Vue({
  el: '#skills-component',
  template: '#skills-wrap',
  components: {
    skillsList
  },
  data() {
    return{
      skills: {}
    }
  },
  created(){
    const data = require("../../data/skills.json");
    this.skills = data;
  }
});

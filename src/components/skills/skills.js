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
    skills: Array
  },
  methods: {

  }
};


import axios from 'axios';


new Vue({
  el: '#skills-component',
  template: '#skills-wrap',
  components: {
    skillsList
  },

  data() {
    return {
      skills: [],
      categories: []
    }
  },

  methods: {
    getCategories() {
      const response = axios.get('/categories/116');
      return response;
    },
    getSkills() {
      const response = axios.get('/skills/116');
      return response;
    },
    filterSkills(categoryId) {
      return this.skills.filter(skill => skill.category === categoryId)
    }
  },

  async created() {

    axios.defaults.baseURL = 'https://webdev-api.loftschool.com/';
    try {

      const response = await this.getCategories();
      this.categories = response.data;
      console.log(response.data);

    } catch (error) {

      throw new Error(
        error.response.data.error || error.response.data.message
      )

    }

    try {

      const response = await this.getSkills();
      this.skills = response.data;
      console.log(response.data);

    } catch (error) {

      throw new Error(
        error.response.data.error || error.response.data.message || error.request
      );

    }
    // const data = require("../../data/skills.json");
    // this.skills = data;
  }
});

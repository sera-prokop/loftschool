<template lang="pug">
    ul.about-group
        li.about-group__item(v-if="condition")
            table.about-group__top
                tr
                    td(colspan="2")
                        input(@keyup.enter="addTitle" type="text" placeholder="Название новой группы" v-model="aboutTitle")
                    td
                        button(@click="addTitle") Add group
                    td
                        button(@click="handleClose") Hide

        li.about-group__item(v-for="category in categories" :key="category.id")
            table.about-group__top
                tr
                    td(colspan="2")
                        h2 {{ category.category }}
                    td
                        button Add group
                    td
                        button(@click="removeCategory(category.id)") Remove group
                skill-item(v-for="skill in filterSkills(category.id)" :key="skill.id" :skill="skill")
            add-skill(:category="category")


</template>


<script>
  import addSkill from "../add-skill/add-skill";
  import skillItem from "../skill-item/skill-item";
  import {mapActions, mapState} from "vuex";

  export default {
    props: {
      condition: Boolean
    },
    data() {
      return {
        aboutTitle: ''
      };
    },
    methods: {
      ...mapActions('about', ['addCategories', 'getCategories', "removeCategories"]),
      ...mapActions('skills', ['getSkillAction']),
      handleClose() {
        this.$emit('handleClose', 'this.condition');
      },
      async addTitle() {
        try {

          await this.addCategories(this.aboutTitle);
          this.aboutTitle = '';

        } catch (error) {

          alert(error.message)

        }
      },
      filterSkills(categoryId) {
        return this.skills.filter(skill => skill.category === categoryId)
      },
      removeCategory(categoryId) {
        try {

          this.removeCategories(categoryId)

        } catch (error) {

          alert(error.message)

        }

      }
    },
    computed: {
      ...mapState('about', {
        categories: state => state.aboutCategories
      }),
      ...mapState('skills', {
        skills: state => state.skills
      })
    },
    components: {
      addSkill, skillItem
    },
    async created() {
      try {

        await this.getCategories();

      } catch (error) {

        alert(error.message)

      }
      try {

        await this.getSkillAction();

      } catch (error) {

        alert(error.message)

      }
    }
  };
</script>


<style src="./about-group.pcss" lang="postcss" scoped>
</style>

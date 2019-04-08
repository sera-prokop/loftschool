<template lang="pug">
    .add-skill
        input(type="text" v-model="skill.title" placeholder="Новый навык")
        input(type="number" v-model="skill.percent" placeholder="100")
        button(@click="addSkill") Add
</template>

<script>
    import { mapActions } from 'vuex';
  export default {
    props: {
      category: Object
    },
    data() {
      return {
        skill: {
          category: this.category.id,
          title: '',
          percent: ''
        }
      };
    },
    methods: {
      ...mapActions('skills', ['addSkillAction']),
      async addSkill(){
        try{

          await this.addSkillAction(this.skill);
          this.skill.percent = '';
          this.skill.title = '';

        } catch (errors) {

          alert(errors.message)

        }
      }
    }
  }
</script>

<style scoped>

</style>

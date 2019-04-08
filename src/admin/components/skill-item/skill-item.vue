<template lang="pug">
    tr(v-if="editmode === false")
        td {{skill.title}}
        td {{skill.percent}}
        td
            button(@click="handleEdit") Edit
        td
            button(@click="removeSkill(skill.id)") Remove
    tr(v-else)
        td
            input(type="text" v-model="newskill.title")
        td
            input(type="number" v-model="newskill.percent")
        td
            button(@click="editSkill") Edit
        td
            button(@click="removeSkill(skill.id)") Remove
</template>

<script>
  import {mapActions} from "vuex";
  export default {
    props: {
      skill: Object
    },
    data(){
      return {
        editmode: false,
        newskill: {...this.skill}
      }
    },
    methods: {
      ...mapActions('skills', ["removeSkillAction", "editSkillAction"]),
      handleEdit(){
        this.editmode = !this.editmode;
      },
      async removeSkill(skillId) {
        try {

          await this.removeSkillAction(skillId)

        } catch (error) {

          alert(error.message)

        }
      },
      async editSkill(skillId) {
        try {

          await this.editSkillAction(this.newskill);
          this.editmode = false;


        } catch (error) {

          alert(error.message)

        }
      }
    }
  }
</script>

<style scoped>

</style>

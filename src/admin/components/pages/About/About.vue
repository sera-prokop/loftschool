<template lang="pug">
  section.about
    .container
      h2.about__title Блок «Обо мне»
        button(@click="addGroup") Добавить группу
      about-group(:condition="condition")
</template>

<script>
  import aboutGroup from '../../about-group/about-group'

  export default {
    data() {
      return {
        condition: true
      }
    },
    computed: {},
    methods: {
      addGroup(){
        this.condition = !this.condition;
      }
    },
    components: {
      aboutGroup
    }
  }
</script>

<style src="./about.pcss" lang="postcss" scoped>

</style>


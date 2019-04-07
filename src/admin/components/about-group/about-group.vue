<template lang="pug">
    ul.about-group
        li.about-group__item(v-if="condition")
            table.about-group__top
                tr
                    td(colspan="2")
                        input(type="text" placeholder="Название новой группы")
                    td
                        button Add group
                    td
                        button Remove group
            add-skill
        li.about-group__item()
            table.about-group__top
                tr
                    td(colspan="2")
                        input(type="text" placeholder="Название новой группы")
                    td
                        button Add group
                    td
                        button Remove group
                tr
                    td Git
                    td 100%
                    td Edit
                    td Remove
                tr
                    td Git
                    td 100%
                    td Edit
                    td Remove
                tr
                    td Git
                    td 100%
                    td Edit
                    td Remove
            add-skill



</template>


<script>
  import addSkill from "../add-skill/add-skill";

  export default {
    props: {
      condition: Boolean
    },
    data() {
      return {};
    },
    components: {
      addSkill
    }
  };
</script>


<style src="./about-group.pcss" lang="postcss" scoped>
</style>

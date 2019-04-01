<template lang="pug">
  header.header
    .container.header__container
      .header__left
        .header__logo
          img(src="../../images/user.jpg" alt="Foto")
        .header__text
          span Сергей Прокопеня
          span Панель администрирования
          a(href="#").header__link-mobile Выйти
      a(href="#").header__right Выйти

        

</template>

<script>
  export default {
    props: {},
    data() {
      return {}
    },
    computed: {},
    methods: {},
    components: {}
  }
</script>

<style src="./header.pcss" lang="postcss" scoped>

</style>


<template lang="pug">
    .container
        nav.nav
            ul.nav__list
                li(v-for="item in list" :key="randomNumber()").nav__item
                    //-a(href="#").nav__link {{item.text}}
                    router-link(
                        :to="item.link"
                    ).nav__link {{item.text}}
</template>

<script>
  export default {
    props: {},
    data() {
      return {
        list: [{text: 'Обо мне', link: '/admin/'}, {text: 'Работы', link: '/works'}, {text: 'Отзывы', link: '/reviews'}]
      }
    },
    computed: {},
    methods: {
      randomNumber: function () {
        this.random = Math.floor(Math.random() * (10 - 1 + 1)) + 1
      }
    },
    components: {}
  }
</script>

<style src="./navigation.pcss" lang="postcss" scoped></style>


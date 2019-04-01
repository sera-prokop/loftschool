<template lang="pug">
  section.works
    .container
      Title
      .works__wrap
        ul.works__list
          li(v-for="item in items").works__item
            .works__img
              img(:src="item.img" :alt="item.title")
            h3.works__title {{item.title}}
            p.works__text {{item.text}}
            a(:href="item.link") {{item.link_text}}
            button(type="button") Править

</template>

<script>
  import Title from '../Title/Title';

  export default {
    props: {},
    data() {
      return {
        items: [
          {
            img: 'img',
            title: 'Сайт школы образования',
            text: 'Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!',
            link: 'http://loftschool.ru',
            link_text: 'http://loftschool.ru'
          },
          {
            img: 'img',
            title: 'Сайт школы образования',
            text: 'Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!',
            link: 'http://loftschool.ru',
            link_text: 'http://loftschool.ru'
          },
          {
            img: 'img',
            title: 'Сайт школы образования',
            text: 'Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!',
            link: 'http://loftschool.ru',
            link_text: 'http://loftschool.ru'
          },
        ]
      }
    },
    computed: {},
    methods: {
      
    },
    components: {
      Title
    }
  }
</script>

<style src="./works.pcss" lang="postcss" scoped></style>


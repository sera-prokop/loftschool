<template lang="pug">
    .content
      Header
      Navigation
      Works
</template>

<script>
  import Header from './components/Header/Header';
  import Navigation from './components/Navigation/Navigation';
  import Works from './components/Works/Works';

  export default {
    props: {},
    data() {
      return {}
    },
    computed: {},
    methods: {},
    components: {
      Header,
      Navigation,
      Works
    }
  }
</script>

<style src="./app.pcss" lang="postcss">

</style>

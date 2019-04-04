<template lang="pug">
    .content
        Header
        Navigation
        router-view
</template>

<script>

  import Header from './components/Header/Header';
  import Navigation from './components/Navigation/Navigation';
  import Works from './components/Works/Works';
  import About from './components/About/About';

  export default {
    props: {},
    data() {
      return {}
    },
    computed: {},
    methods: {},
    components: {
      Header,
      Navigation
    }
  }
</script>

<style src="./app.pcss" lang="postcss">

</style>

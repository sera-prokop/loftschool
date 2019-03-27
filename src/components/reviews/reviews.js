import Vue from 'vue';
import Flickity from 'vue-flickity';

new Vue({
  el: '#reviews_component',
  template: '#reviews',
  components: {
    Flickity
  },

  data() {
    return {
      flickityOptions: {
        // initialIndex: 3,
        prevNextButtons: false,
        pageDots: false,
        // wrapAround: true,
        groupCells: window.screen.width > 768 ? 2 : 1,
        resize: true

        // any options from Flickity can be used
      }
    }
  },

  methods: {
    next() {
      this.$refs.flickity.next();
      console.log('lsfdjs');
    },

    previous() {
      this.$refs.flickity.previous();
      console.log('345345');
    }
  }
});

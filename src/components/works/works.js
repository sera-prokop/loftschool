import Vue from 'vue';


const info = {
  template: '#slider-info',
  props: {
    currentWork: Object
  }
};

const tags = {
  template: '#slider-tags',
  props: {
    currentWork: Object,
    tagsArray: Array
  }
};

const thumbs = {
  template: '#slider-thumbs',
  props: {
    works: Array,
    currentWork: Object
  }
};

const display = {
  template: '#slider-display',
  props: {
    works: Array,
    currentWork: Object,
    currentIndex: Number
  }
};

const btns = {
  template: '#slider-btns',
  props: {
    works: Array
  }
};


new Vue({
  el: '#slider-component',
  template: '#slider-wrapper',
  components: {
    display,
    btns,
    thumbs,
    tags,
    info
  },
  data() {
    return {
      works: [],
      currentIndex: 0
    }
  },
  methods: {
    arrRequiredImg(data) {
      return data.map(item => {
        const requiredImg = require(`../../images/content/works/${item.img}`);
        item.img = requiredImg;

        return item;
      });
    },
    handleSlide(direction) {
      switch (direction) {
        case ('next'):
          this.currentIndex++;
          break;
        case ('prev'):
          this.currentIndex--;
          break;
      }

      // if(direction === 'next') currentIndex++;
      // if(direction === 'prev') this.currentIndex--;
    },
    amountCurrentLength(value) {
      const worksLength = this.works.length - 1;
      if (value > worksLength) this.currentIndex = 0;
      if (value < 0) this.currentIndex = worksLength;
    },
    handleThumbs(direction) {
      this.currentIndex = direction;
    }
  },
  computed: {
    currentWork() {
      return this.works[this.currentIndex]
    },
    tagsArray(){
      return this.currentWork.tags.split(',')
    }
  },
  watch: {
    currentIndex(value) {
      this.amountCurrentLength(value);
    }
  },
  created() {
    const data = require("../../data/works.json");
    this.works = this.arrRequiredImg(data);
  }
});

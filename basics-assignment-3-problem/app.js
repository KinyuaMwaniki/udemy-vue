const app = Vue.createApp({
  data() {
    return {
      number: 0,
    };
  },
  methods: {
    updateNumber(num) {
      this.number = this.number + num;
    },
  },
  computed: {
    result() {
      if (this.number < 37) {
        return "Not there yet!";
      } else if (this.number === 37) {
        return this.number;
      } else {
        return "Too much!";
      }
    },
  },
  watch: {
    // You can watch computer properties
    result() {
      const that = this;
      setTimeout(function () {
        that.number = 0;
      }, 5000);
    },
  },
});

app.mount("#assignment");

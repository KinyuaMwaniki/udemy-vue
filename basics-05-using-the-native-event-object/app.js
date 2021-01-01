const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      fullname: '',
      lastName: '',
    };
  },
  computed: {
    fullName()
    {
      // We are going to use computed properties as a data property
      // Use computer properties only to output

      if(this.name === '')
      {
        return '';
      }
      return this.name + ' ' + this.lastName;
    }
  },
  watch: {

    // Whenever data property changes, watchers are good in setting data variables based on some logic e.g send http requests
    
    name(value) {
      this.fullname = value + ' ' + this.lastName;
    },
    lastName(value) {
      this.fullname = this.name + ' ' + value;
    },
    counter(value)
    {
      if(value > 50)
      {
        this.counter = 0;
      }
    }
  },
  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput()
    {
      this.name = "";
    },
    outPutFullName()
    {
      if(this.name === '')
      {
        return '';
      }
      return this.name + ' ' + 'Mwaniki';
    }
  }
});

app.mount('#events');

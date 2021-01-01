

const app = Vue.createApp({
    data() 
    {
      return {
        outputdown : '',
        outputenter: '',
      };
    },
    methods: 
    {
      showAlert()
      {
        alert('Clicked');
      },
      registerInput(event)
      {
          this.outputdown = event.target.value
      },
      registerInputOnEnter(event)
      {
        this.outputenter = event.target.value
      }
    }
  });
  
  app.mount('#assignment');
  
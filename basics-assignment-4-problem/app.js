const app = Vue.createApp({
    data() {
      return {
        enteredClass: '',
        user1: false,
        user2: false,
        visible: true,
        hidden: false,
        enteredColor: '',
        confirmedColor: '',
      };
    },
    methods: {
        confirmClass()
        {
            if(this.enteredClass === 'user1')
            {
                this.user1 = true; 
                this.user2 = false; 
            }
            else if(this.enteredClass === 'user2')
            {
                this.user1 = false; 
                this.user2 = true; 
            }
        },
        toggleVisible()
        {
            this.visible = !this.visible;
            this.hidden = !this.hidden;
        },
        confirmColor()
        {
            this.confirmedColor = this.enteredColor;
        },
    },
    computed: {

    },
    watch: {

    },
  });
  
  app.mount("#assignment");
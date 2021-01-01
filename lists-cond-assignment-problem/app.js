const app = Vue.createApp({
    data() {
      return {
        task: '',
        tasks: [],
        showTasks: true
      };
    },
    methods: {
        addTask()
        {
            this.tasks.push(this.task);
        },
        toggleShowTasks()
        {
            this.showTasks = !this.showTasks;
        }
    },
    computed: {
        displayListButtonName()
        {
            if(this.showTasks)
            {
                return 'Hide';
            }
            return 'Show';
        }
    },
    watch: {

    },
  });
  
  app.mount("#assignment");
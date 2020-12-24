const app = Vue.createApp({
    data() 
    {
        return {
            name: 'Felix Mwaniki',
            age : 30,
            image_url: 'girl.jpg',

        };
    },
    methods: 
    {
        calculateAgeInFiveYears() 
        {
            return this.age + 5;
        },
        getrandomNumber()
        {
            return Math.random();
        }
    }
});

app.mount('#assignment');
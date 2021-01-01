const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "0214312342342",
          email: "manuel@localhost.com",
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "01234325423",
          email: "julie@localhost.com",
        },
      ],
    };
  },
});

// Use a dash when defining components to avoid clashing with html tags
app.component("friend-contact", {
template: `
    <li>
    <!-- {{}} is called interpolation -->
    <h2> {{ friend.name }}</h2>
    <button @click="toggleDetails">{{ detailsAreVisible? 'Hide' : 'Show' }} Details</button>
    <ul v-if="detailsAreVisible">
    <li><strong>Phone:</strong> {{ friend.name }} </li>
    <li><strong>Email:</strong> {{ friend.email }} </li>
    </ul>
    </li>
`,
  data() {
    return {
      detailsAreVisible: true,
      friend: {
        id: "manuel",
        name: "Manuel Lorenz",
        phone: "0214312342342",
        email: "manuel@localhost.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

app.mount("#app");

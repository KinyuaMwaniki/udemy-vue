// 'vue' is importing from a package
import { createApp } from 'vue';

// App is name of our choice
import App from './App.vue';
import FriendContact from './components/FriendContact.vue';

const app = createApp(App);

app.component('friend-component', FriendContact);

app.mount('#app');

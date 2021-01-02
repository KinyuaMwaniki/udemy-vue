// 'vue' is importing from a package
import { createApp } from 'vue';

// App is name of our choice
import App from './App.vue';
import FriendContact from './components/FriendContact.vue';
import NewFriend from './components/NewFriend.vue';

const app = createApp(App);

app.component('friend-component', FriendContact);
app.component('new-friend', NewFriend);

app.mount('#app');

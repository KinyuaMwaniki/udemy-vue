import { createApp } from 'vue';

import { createRouter, createWebHistory} from 'vue-router';

import App from './App.vue';

import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue'

// CreateWebHistory use the web browsers built in mechanism to remember where the user came from.
export const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/teams', component: TeamsList},
        { path: '/users', component: UsersList}
    ],
    linkActiveClass: 'active'
});

const app = createApp(App)

app.use(router);
app.mount('#app');

import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from './pages/TeamsList.vue';
import UsersList from './pages/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './pages/NotFound.vue';
import TeamsFooter from './pages/TeamsFooter.vue';
import UsersFooter from './pages/UsersFooter.vue';

// CreateWebHistory use the web browsers built in mechanism to remember where the user came from.
export const router = createRouter({
    history: createWebHistory(),
    routes: [
      { name: 'teams', path: '/', redirect: '/teams' },
      {
        path: '/teams',
        meta: { needsAuth: true },
        components: { default: TeamsList, footer: TeamsFooter },
        children: [
          {
            name: 'team-members',
            path: ':teamId',
            component: TeamMembers,
            props: true
          } // teams/t2
        ]
      },
      {
        path: '/users',
        components: { default: UsersList, footer: UsersFooter },
        beforeEnter(to, from, next) {
          console.log('users.beforeEnter');
          console.log(to, from);
          next();
        }
      },
  
      // Catch all routes
      // { path: '/:notFound(.*)', redirect: '/'}
  
      { path: '/:notFound(.*)', component: NotFound }
    ],
    linkActiveClass: 'active',
    scrollBehavior(_1, _2, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      }
      return { left: 0, top: 0 };
    }
  });
  
  // Navigation guard
  router.beforeEach(function(to, from, next) {
    console.log('Global beforeEach');
    console.log(to, from);
    if (to.meta.needsAuth) {
      console.log('Needs Auth');
      next();
    } else {
      next();
    }
    // if (to.name === 'team-members') {
    //   next();
    // } else {
    //   next({
    //     name: 'team-members',
    //     params: { teamId: 't2' }
    //   });
    // }
  });
  
  // router.afterEach(function(to, from) {
  //   // Sending analytics data for example e.g to log navigation options
  // });
  
  // Cancelling navigation


  export default router;
<template>
  <button v-if="!userLoggedIn" @click="login">Login</button>
  <button v-else @click="logout">Logout</button>
</template>

<script>
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['userLoggedIn']),
  },
  methods: {
    ...mapActions({
      login: 'login',
      logout: 'logout',
    }),
  },
};
</script>
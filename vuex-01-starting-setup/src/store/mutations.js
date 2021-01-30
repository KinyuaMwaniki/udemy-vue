export default {
  logout(state) {
    state.isLoggedIn = false;
  },
  login(state) {
    state.isLoggedIn = true;
  }
};

 export default {
    addItemToCart(context, payload) {
      context.commit('addItemToCart', payload);
    },
    removeProductFromCart(context, payload) {
      context.commit('removeProductFromCart', payload);
    },
    login(context) {
      context.commit('login');
    },
    logout(context) {
      context.commit('logout');
    }
  }
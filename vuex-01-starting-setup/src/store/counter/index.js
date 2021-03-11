import counterMutations from './mutations.js';
import counterActions from './actions.js';
import counterGetters from './getters.js';

export default {
  namespaced: true,
  // Namespace is the key to the module on the store.
  state() {
    return {
      counter: 0
    };
  },
  mutations: counterMutations,
  actions: counterActions, 
  getters: counterGetters
};

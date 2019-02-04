import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    audioFile: null
  },
  mutations: {
    setFile(state, newFile) {
      state.audioFile = newFile;
    }
  },
  actions: {
    setFile(context, newFile) {
      context.commit("setFile", newFile);
    }
  }
});

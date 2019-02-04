import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    audioFile: null,
    isPaused: false
  },
  mutations: {
    setFile(state, newFile) {
      state.audioFile = newFile;
    },
    togglePlayback(state) {
      state.isPaused = !state.isPaused;
    }
  },
  actions: {
    setFile(context, newFile) {
      context.commit("setFile", newFile);
    },
    togglePlayback(context) {
      context.commit("togglePlayback");
    }
  }
});

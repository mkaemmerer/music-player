import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const audioContext = new window.AudioContext();
const audioElement = document.createElement("audio");

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
      audioElement.src = newFile;
      const audioSource = audioContext.createMediaElementSource(audioElement);
      audioSource.connect(audioContext.destination);

      context.commit("setFile", newFile);
    },
    togglePlayback(context) {
      audioContext.resume();
      context.state.isPaused ? audioElement.play() : audioElement.pause();
      context.commit("togglePlayback");
    }
  }
});

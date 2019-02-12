import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const audioContext = new window.AudioContext();
const audioElement = document.createElement("audio");

export default new Vuex.Store({
  state: {
    audioFile: null,
    isPaused: true,
    volume: 0.5
  },
  mutations: {
    setFile(state, newFile) {
      state.audioFile = newFile;
    },
    togglePlayback(state) {
      state.isPaused = !state.isPaused;
    },
    changeVolume(state, volume) {
      state.volume = volume;
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
    },
    changeVolume(context, volume) {
      audioElement.volume = volume;
      context.commit("changeVolume", volume);
    }
  }
});

import Vue from "vue";
import Vuex from "vuex";
import WebSocketPlugin from "./webSocketPlugin";

Vue.use(Vuex);

const audioContext = new window.AudioContext();
const audioElement = document.createElement("audio");

export default new Vuex.Store({
  state: {
    isPaused: true,
    volume: 0.5
  },
  mutations: {
    broadcastSetFile() {
      // handle this mutation so that websocket plugin can broadcast it
      // actual state is handled by audioElement
    },
    receiveSetFile() {
      // actual state is handled by audioElement
    },
    togglePlayback(state) {
      state.isPaused = !state.isPaused;
    },
    changeVolume(state, volume) {
      state.volume = volume;
    }
  },
  actions: {
    // Broadcast actions
    broadcastSetFile(context, newFile) {
      const url = window.URL.createObjectURL(newFile);

      audioElement.src = url;
      const audioSource = audioContext.createMediaElementSource(audioElement);
      audioSource.connect(audioContext.destination);

      context.commit("broadcastSetFile", newFile);
    },
    togglePlayback(context) {
      audioContext.resume();
      context.state.isPaused ? audioElement.play() : audioElement.pause();
      context.commit("togglePlayback");
    },
    // Receive actions
    receiveSetFile(context, newFile) {
      const url = window.URL.createObjectURL(newFile);

      audioElement.src = url;
      const audioSource = audioContext.createMediaElementSource(audioElement);
      audioSource.connect(audioContext.destination);

      context.commit("receiveSetFile", newFile);
    },
    // Local actions
    changeVolume(context, volume) {
      audioElement.volume = volume;
      context.commit("changeVolume", volume);
    }
  },
  plugins: [WebSocketPlugin()]
});

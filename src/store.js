import Vue from "vue";
import Vuex from "vuex";
import WebSocketPlugin from "./webSocketPlugin";
import AudioSource from "./utils/audio-source";
Vue.use(Vuex);

const audioElement = document.createElement("audio");
const audioSource = new AudioSource(audioElement);

audioElement.onerror = err => {
  throw err;
};

export default new Vuex.Store({
  state: {
    isPaused: true,
    volume: 0.5,
    audioSource: audioSource
  },
  mutations: {
    broadcastSetFile() {
      // handle this mutation so that websocket plugin can broadcast it
      // actual state is handled by audioElement
    },
    broadcastTogglePlayback(state) {
      state.isPaused = !state.isPaused;
    },
    receiveSetFile() {
      // actual state is handled by audioElement
    },
    recieveTogglePlayback(state) {
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

      context.commit("broadcastSetFile", newFile);
    },
    broadcastTogglePlayback(context) {
      audioSource.context.resume();
      context.state.isPaused ? audioElement.play() : audioElement.pause();
      context.commit("broadcastTogglePlayback");
    },

    // Receive actions
    receiveSetFile(context, newFile) {
      const url = window.URL.createObjectURL(newFile);

      audioElement.src = url;

      context.commit("receiveSetFile", newFile);
    },
    recieveTogglePlayback(context) {
      audioSource.context.resume();
      context.state.isPaused ? audioElement.play() : audioElement.pause();
      context.commit("recieveTogglePlayback");
    },

    // Local actions
    changeVolume(context, volume) {
      audioElement.volume = volume;
      context.commit("changeVolume", volume);
    }
  },
  plugins: [WebSocketPlugin()]
});

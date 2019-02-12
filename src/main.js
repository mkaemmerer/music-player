import Vue from "vue";
import App from "./App.vue";
import store from "./store";

const ws = new WebSocket("ws://localhost:3001/");
ws.onopen = () => {
  /* eslint-disable no-console */
  console.log("ws open()");
  ws.send("sup");
};
ws.onerror = err => {
  /* eslint-disable no-console */
  console.error("ws onerror() ERR: ", err);
};
ws.onmessage = evt => {
  /* eslint-disable no-console */
  console.log("ws onmessage() data: ", evt.data);
};

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");

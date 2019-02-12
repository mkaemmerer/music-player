import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import WebSocketPlugin from "./webSocketPlugin";

Vue.config.productionTip = false;

Vue.use(new WebSocketPlugin());

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");

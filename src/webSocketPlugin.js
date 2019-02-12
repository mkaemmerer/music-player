export default class WebSocketPlugin {
  constructor(url) {
    this.ws = new WebSocket(url || "ws://localhost:3001/");
  }

  async install(Vue) {
    /* eslint-disable no-console */
    await new Promise(resolve => {
      this.ws.onopen = () => resolve();
    });
    console.log("ws open()");
    this.ws.send("sup dawgs");

    Vue.prototype.$ws = this.ws;

    this.ws.onerror = err => {
      console.error("ws onerror() ERR: ", err);
    };
    this.ws.onmessage = evt => {
      console.log("ws onmessage() data: ", evt.data);
    };
  }
}

export default function WebSocketPlugin(url) {
  const ws = new WebSocket(url || "ws://localhost:3001/");

  return async store => {
    /* eslint-disable no-console */
    await new Promise(resolve => {
      ws.onopen = () => resolve();
    });
    console.log("ws open()");

    ws.onerror = err => {
      console.error("ws onerror() ERR: ", err);
    };

    // Incoming messages
    ws.onmessage = evt => {
      if (evt.data instanceof Blob) {
        // it's an audioFile! :D
        const file = evt.data;
        store.dispatch("receiveSetFile", file);
      }
    };

    // Outgoing messages
    store.subscribe(({ type, payload }) => {
      switch (type) {
        case "broadcastSetFile": {
          const file = payload;
          ws.send(file);
        }
      }
    });
  };
}

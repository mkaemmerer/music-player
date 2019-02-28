export default function WebSocketPlugin(url) {
  const ws = new WebSocket(url || "ws://localhost:3001/");

  return async store => {
    /* eslint-disable no-console */
    await new Promise(resolve => {
      ws.onopen = () => resolve();
    });

    ws.onerror = err => {
      console.error("ws onerror() ERR: ", err);
    };

    // Incoming messages
    ws.onmessage = evt => {
      if (evt.data instanceof Blob) {
        const audioFile = evt.data;
        store.dispatch("receiveSetFile", audioFile);
        return;
      }

      const { type } = JSON.parse(evt.data);

      switch (type) {
        case "broadcastTogglePlayback": {
          store.dispatch("recieveTogglePlayback");
          break;
        }
      }
    };

    // Outgoing messages
    store.subscribe(({ type, payload }) => {
      switch (type) {
        case "broadcastSetFile": {
          const audioFile = payload;
          ws.send(audioFile);
          break;
        }
        case "broadcastTogglePlayback": {
          ws.send(JSON.stringify({ type }));
          break;
        }
      }
    });
  };
}

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
    // ws.onmessage = evt => {
    //   // handle message and commit changes to store
    //   const { type, payload } = JSON.parse(evt.data);
    //
    //   switch (type) {
    //     case "broadcastSetFile": {
    //       // const file = payload;
    //       const file = new Blob([payload], { type: "application/mp3" });
    //       console.log(payload);
    //       console.log("receiveSetFile");
    //       console.log(file);
    //       //something else
    //       store.dispatch("receiveSetFile", file);
    //     }
    //   }
    // };
    ws.onmessage = evt => {
      console.log(typeof evt.data)
      const file = new Blob([evt.data], { type: "application/mp3" });
      console.log("receiveSetFile");
      console.log(file);
      store.dispatch("receiveSetFile", file);
    }

    // Outgoing messages
    store.subscribe(({ type, payload }) => {
      switch (type) {
        case "broadcastSetFile": {
          const file = payload;
          const reader = new FileReader();
          reader.onload = () => {
            console.log(reader.result)
            ws.send(reader.result);
            ws.send(
              JSON.stringify({
                type: "broadcastSetFile",
                payload: reader.result
              })
            );
          };
          reader.readAsArrayBuffer(file);
        }
      }
    });
  };
}

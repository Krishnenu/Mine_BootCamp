1:- Explain pub-sub communucation design pattern.
2:-Explain static context.
3:- Explain dynamic context.

<---------------------------------------------------->
// Important to understand Context Api concept
class PubSub {
  constructor() {
    this.subscribers = {};
    this.dataStore = {};
  }

  subscribe(event, callback) {
    if (!this.subscribers[event]) {
      this.subscribers[event] = [];
    }
    this.subscribers[event].push(callback);
  }

  publish(event, data) {
    if (!this.subscribers[event]) {
      return;
    }
    //even for first execution
    this.dataStore[event] = data; // Update data store with new data
    this.subscribers[event].forEach((callback) => {
      callback(data);
    });
  }

  getData(event) {
    return this.dataStore[event];
  }

  unsubscribe(event, callback) {
    if (!this.subscribers[event]) {
      return;
    }
    this.subscribers[event] = this.subscribers[event].filter(
      (cb) => cb !== callback
    );
  }
}

// Usage
const pubsub = new PubSub();

const callback1 = (data) => {
  console.log(`Callback 1 received data: ${data}`);
};

const callback2 = (data) => {
  console.log(`Callback 2 received data: ${data}`);
};

pubsub.subscribe("event1", callback1);
pubsub.subscribe("event1", callback2);

pubsub.publish("event1", "Hello, world!"); // Both callbacks should be triggered

const reduxLikeState = pubsub.getData("event1");
console.log("Redux-like state:", reduxLikeState);

pubsub.unsubscribe("event1", callback1);

pubsub.publish("event1", "After unsubscribe"); // Only callback2 should be triggered

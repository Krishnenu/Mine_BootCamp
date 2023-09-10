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

//----------------------------------------------------------------------------------------------------------

// Very Important to Know:

import React, { createContext, useContext, useState } from 'react';

// Create a context
const MyContext = createContext();

// Create a parent component that provides a value including a callback
function ParentComponent() {
  const [data, setData] = useState('');

  const sendDataToParent = (newData) => {
    // Update the data when called by child components
    setData(newData);
  };

  return (
    <MyContext.Provider value={{ data, sendDataToParent }}>
      <ChildComponent />
    </MyContext.Provider>
  );
}

// Child component that consumes the context
function ChildComponent() {
  const { data, sendDataToParent } = useContext(MyContext);

  const handleButtonClick = () => {
    // Send data to the parent when a button is clicked
    sendDataToParent('New data from child');
  };

  return (
    <div>
      <p>Data from parent: {data}</p>
      <button onClick={handleButtonClick}>Send Data to Parent</button>
    </div>
  );
}

// App component that renders the parent component
function App() {
  return (
    <div>
      <ParentComponent />
    </div>
  );
}

export default App;


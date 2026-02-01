import { useEffect } from "react";
import { io } from "socket.io-client";

// IMPORTANT: socket is created OUTSIDE the component
const socket = io("http://localhost:5000");

function App() {
  useEffect(() => {
    console.log("React mounted, socket connecting...");

    return () => {
      console.log("React unmounted, socket disconnecting...");
      socket.disconnect();
    };
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Jarvis Socket Test</h1>
      <p>Open backend terminal and check socket logs.</p>
    </div>
  );
}

export default App;

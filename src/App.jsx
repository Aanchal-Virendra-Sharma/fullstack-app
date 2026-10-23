import { useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  async function getMessage() {
    try {
      const response = await fetch("/api/message");
      const data = await response.json();
      setMessage(data.message);
    } catch {
      setMessage("Unable to connect to the backend.");
    }
  }

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Full Stack React Application</h1>
      <p>Deployed on AWS EC2</p>
      <button onClick={getMessage}>Get Backend Message</button>
      <p>{message}</p>
    </div>
  );
}

export default App;
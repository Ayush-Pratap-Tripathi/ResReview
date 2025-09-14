import { useEffect, useState } from "react";
import { getHello } from "./services/api";

export default function App() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    getHello().then(setMsg).catch(err => setMsg("Backend not reachable" + err));
  }, []);

  return (
    <div style={{ padding: 24 }}>
      <h1>Hello Resume Screener Frontend</h1>
      <p>Backend says: {msg}</p>
    </div>
  );
}

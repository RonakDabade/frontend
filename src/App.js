import { useState } from "react";
import Register from "./Register";
import Login from "./Login";
import UserTable from "./UserTable";
import "./App.css";

function App() {
  const [tab, setTab] = useState("register");
  const [userId, setUserId] = useState(null);

  if (userId) {
    return (
      <div className="container">
        <h2>User Details</h2>
        <UserTable userId={userId} />
      </div>
    );
  }

  return (
    <div className="container">
      <div className="tabs">
        <button className={`tab ${tab === "register" ? "active" : ""}`} onClick={() => setTab("register")}>
          Register
        </button>
        <button className={`tab ${tab === "login" ? "active" : ""}`} onClick={() => setTab("login")}>
          Login
        </button>
      </div>

      {tab === "register" ? <Register /> : <Login onLogin={setUserId} />}
    </div>
  );
}

export default App;

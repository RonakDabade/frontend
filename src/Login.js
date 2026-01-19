import { useState } from "react";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async () => {
    const res = await fetch(
      `https://backend-clean-lfp0.onrender.com/login?email=${email}&password=${password}`,
      { method: "POST" }
    );

    const data = await res.json();

    if (data.user_id) {
      onLogin(data.user_id);
    } else {
      alert(data.error);
    }
  };

  return (
    <>
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={submit}>Login</button>
    </>
  );
}

export default Login;

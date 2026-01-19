import { useState } from "react";

function Register({ onSuccess }) {
  const [form, setForm] = useState({
    first_name: "",
    middle_name: "",
    last_name: "",
    address: "",
    dob: "",
    gender: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async () => {
    const res = await fetch("https://backend-clean-lfp0.onrender.com/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });
    const data = await res.json();
    alert(data.msg);
  };

  return (
    <>
      <input name="first_name" placeholder="First Name" onChange={handleChange} />
      <input name="middle_name" placeholder="Middle Name" onChange={handleChange} />
      <input name="last_name" placeholder="Last Name" onChange={handleChange} />
      <input name="address" placeholder="Address" onChange={handleChange} />
      <input name="dob" placeholder="DOB" onChange={handleChange} />
      <input name="gender" placeholder="Gender" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} />
      <button onClick={submit}>Register</button>
    </>
  );
}

export default Register;

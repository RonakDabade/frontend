import { useEffect, useState } from "react";

function UserTable({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://backend-clean-lfp0.onrender.com/user/${userId}`)
      .then(res => res.json())
      .then(data => setUser(data));
  }, [userId]);

  if (!user) return <p>Loading...</p>;

  return (
    <table>
      <tbody>
        <tr><td>First Name</td><td>{user.first_name}</td></tr>
        <tr><td>Middle Name</td><td>{user.middle_name}</td></tr>
        <tr><td>Last Name</td><td>{user.last_name}</td></tr>
        <tr><td>Address</td><td>{user.address}</td></tr>
        <tr><td>DOB</td><td>{user.dob}</td></tr>
        <tr><td>Gender</td><td>{user.gender}</td></tr>
        <tr><td>Email</td><td>{user.email}</td></tr>
      </tbody>
    </table>
  );
}

export default UserTable;

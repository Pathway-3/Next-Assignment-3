import React from "react";

export default function Form() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === validCred.username && password === validCred.password) {
      alert("Login Successful");
    } else {
      alert("Login Failed");
    }
  };

  const validCred = {
    username: "admin",
    email: "admin",
    password: "admin",
  };
  setUsername("");
  setEmail("");
  setPassword("");

  return (
    <div>
      <form>
        <label>Username</label>
        <input type="text" onChange={(e) => setUsername(e.target.value)} />
        <label>Email</label>
        <input type="text" onChange={(e) => setEmail(e.target.value)} />
        <label>Password</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

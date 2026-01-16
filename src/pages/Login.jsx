import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");

  return (
    <div className="container mt-4">
      <h2>Login</h2>
      <input
        className="form-control mb-2"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="btn btn-primary">Entrar</button>
    </div>
  );
}

export default Login;

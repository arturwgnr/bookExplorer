import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Auth() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [attempts, setAttempts] = useState(0);
  const nav = useNavigate();

  const correctPassword = "alexandria"; // 🔑 senha secreta

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password === correctPassword) {
      setError("");
      setAttempts(0);
      nav("/dashboard"); // rota privada que você vai criar
    } else {
      setAttempts((prev) => prev + 1);
      setError("Incorrect password. Access denied.");
      setPassword("");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1 className="auth-title">Online Library of Alexandria</h1>
        <p className="auth-subtitle">📖 Find, save and explore your favorite books</p>

        <form onSubmit={handleSubmit} className="auth-form">
          <input
            type="password"
            placeholder="Enter the secret password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="auth-input"
          />
          <button type="submit" className="auth-button">
            Enter
          </button>
        </form>

        {error && <p className="auth-error">{error} (Attempts: {attempts})</p>} <br />
      <button onClick={() => nav("/dashboard")}  className="auth-button">←</button>
      </div>

    </div>
  );
}

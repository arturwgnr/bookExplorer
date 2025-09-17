import { useNavigate } from "react-router-dom";

export default function Landing() {

  const nav = useNavigate();

  return (
    <div className="landing-container">
      <header className="landing-header">
        <h1 className="landing-title">Online Library of Alexandria</h1>
        <p className="landing-subtitle">Find, save and explore your favorite books</p><br />
        <h1>📖</h1>
      </header>

      <main className="landing-main">
        <button onClick={() => nav("/library-auth")} className="landing-button">Enter</button>
      </main>

      <footer className="landing-footer">
        <p>© 2025 Book Explorer Pro</p>
      </footer>
    </div>
  );
}

import { useState } from "react";
import AuthForm from "./components/AuthForm";

function App() {
  const [mode, setMode] = useState("login");

  function toggleMode() {
    setMode((current) => (current === "login" ? "register" : "login"));
  }

  return (
    <main>
      <h1>Course Assignment</h1>

      <AuthForm key={mode} mode={mode} />

      <p>
        {mode === "login"
          ? "Don't have an account?"
          : "Already have an account?"}
      </p>

      <button type="button" onClick={toggleMode}>
        {mode === "login" ? "Register" : "Login"}
      </button>
    </main>
  );
}

export default App;

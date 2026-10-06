import { useState } from "react";
import { signIn, signUp } from "../services/auth";

export default function AuthForm({ mode = "login" }) {
  const isRegister = mode === "register";

  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    setError("");
    setMessage("");

    if (isRegister && fullName.trim().length < 2) {
      setError("Please enter your full name.");
      return;
    }

    setLoading(true);

    try {
      if (isRegister) {
        await signUp(email, password, fullName);

        setMessage(
          "Registration successful! Check your email to confirm your account.",
        );
      } else {
        await signIn(email, password);

        setMessage("You are now logged in!");
      }
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>{isRegister ? "Register" : "Login"}</h1>

      {isRegister && (
        <div>
          <label htmlFor="full-name">Full name</label>
          <input
            id="full-name"
            type="text"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
            autoComplete="name"
            minLength={2}
            maxLength={100}
            required
          />
        </div>
      )}

      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          autoComplete="email"
          required
        />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          autoComplete={isRegister ? "new-password" : "current-password"}
          minLength={6}
          required
        />

        <label htmlFor="show-password">
          <input
            id="show-password"
            type="checkbox"
            checked={showPassword}
            onChange={(event) => setShowPassword(event.target.checked)}
          />
          Show password
        </label>
      </div>

      {error && <p role="alert">{error}</p>}
      {message && <p role="status">{message}</p>}

      <button type="submit" disabled={loading}>
        {loading ? "Please wait..." : isRegister ? "Register" : "Login"}
      </button>
    </form>
  );
}

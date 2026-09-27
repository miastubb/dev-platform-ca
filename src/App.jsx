import { useEffect, useState } from "react";
import AuthForm from "./components/AuthForm";
import ArticleList from "./components/ArticleList";
import ArticleForm from "./components/ArticleForm";
import { supabase } from "./lib/supabase";

function App() {
  const [mode, setMode] = useState("login");
  const [session, setSession] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  const [articleVersion, setArticleVersion] = useState(0);

  useEffect(() => {
    let active = true;

    async function loadSession() {
      const { data, error } = await supabase.auth.getSession();

      if (!active) return;

      if (error) {
        setAuthError(error.message);
      } else {
        setSession(data.session);
      }

      setAuthLoading(false);
    }

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, newSession) => {
      if (active) {
        setSession(newSession);
        setAuthLoading(false);
      }
    });

    loadSession();

    return () => {
      active = false;
      subscription.unsubscribe();
    };
  }, []);

  function toggleMode() {
    setMode((current) => (current === "login" ? "register" : "login"));
  }

  async function handleLogout() {
    setAuthError("");

    const { error } = await supabase.auth.signOut();

    if (error) {
      setAuthError(error.message);
    }
  }

  function handleArticleCreated() {
    setArticleVersion((current) => current + 1);
  }

  return (
    <main>
      <h1>Course Assignment</h1>

      {authError && <p role="alert">{authError}</p>}

      <ArticleList key={articleVersion} />

      {authLoading ? (
        <p>Checking authentication...</p>
      ) : session ? (
        <>
          <p>Signed in as {session.user.email}</p>

          <button type="button" onClick={handleLogout}>
            Logout
          </button>

          <ArticleForm onArticleCreated={handleArticleCreated} />
        </>
      ) : (
        <>
          <AuthForm key={mode} mode={mode} />

          <p>
            {mode === "login"
              ? "Don't have an account?"
              : "Already have an account?"}
          </p>

          <button type="button" onClick={toggleMode}>
            {mode === "login" ? "Register" : "Login"}
          </button>
        </>
      )}
    </main>
  );
}

export default App;

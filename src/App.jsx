import { useEffect, useState } from "react";
import AuthForm from "./components/AuthForm";
import ArticleList from "./components/ArticleList";
import ArticleForm from "./components/ArticleForm";
import { supabase } from "./lib/supabase";
import { signOut } from "./services/auth";
import "./App.css";

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

    try {
      await signOut();
    } catch (error) {
      setAuthError(error.message);
    }
  }

  function handleArticleCreated() {
    setArticleVersion((current) => current + 1);
  }

  return (
    <div className="site-wrapper">
      <header className="site-header">
        <div className="header-inner">
          <div className="brand">
            <span className="brand-name">THE DAILY.</span>
            <span className="brand-tagline">STORIES WORTH READING</span>
          </div>

          <nav className="header-nav" aria-label="Main navigation">
            <a href="#articles">Articles</a>

            {!authLoading && (
              <a href="#account">{session ? "Publish" : "Login"}</a>
            )}
          </nav>
        </div>
      </header>

      <main className="site-main">
        <section className="hero">
          <span className="hero-eyebrow">YOUR DAILY READ</span>
          <h1>A fresh perspective on the stories that matter.</h1>
          <p>Explore the latest articles and share your own.</p>
        </section>

        {authError && <p role="alert">{authError}</p>}

        <div className="content-layout">
          <div className="articles-column" id="articles">
            <ArticleList key={articleVersion} />
          </div>

          <aside className="sidebar" id="account">
            {authLoading ? (
              <p>Checking authentication...</p>
            ) : session ? (
              <>
                <p className="signed-in">Signed in as {session.user.email}</p>

                <ArticleForm onArticleCreated={handleArticleCreated} />

                <button
                  className="logout-button"
                  type="button"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <AuthForm key={mode} mode={mode} />

                <p className="auth-prompt">
                  {mode === "login"
                    ? "Don't have an account?"
                    : "Already have an account?"}
                </p>

                <button
                  className="switch-auth-button"
                  type="button"
                  onClick={toggleMode}
                >
                  {mode === "login" ? "Register" : "Login"}
                </button>
              </>
            )}
          </aside>
        </div>
      </main>

      <footer className="site-footer">
        <p>THE DAILY. &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;

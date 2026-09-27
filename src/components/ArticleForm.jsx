import { useState } from "react";
import { createArticle } from "../services/articles";

export default function ArticleForm({ onArticleCreated }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    if (!title.trim() || !content.trim()) {
      setError("Both title and content are required.");
      return;
    }

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const article = await createArticle({ title, content });

      setTitle("");
      setContent("");
      setSuccess("Article published successfully!");
      onArticleCreated?.(article);
    } catch (err) {
      setError(err.message || "Unable to publish article.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section aria-labelledby="create-article-heading">
      <h2 id="create-article-heading">Create article</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="article-title">Title</label>
          <input
            id="article-title"
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            required
            maxLength={150}
          />
        </div>

        <div>
          <label htmlFor="article-content">Content</label>
          <textarea
            id="article-content"
            value={content}
            onChange={(event) => setContent(event.target.value)}
            required
            rows={8}
          />
        </div>

        {error && <p role="alert">{error}</p>}
        {success && <p role="status">{success}</p>}

        <button type="submit" disabled={loading}>
          {loading ? "Publishing..." : "Publish article"}
        </button>
      </form>
    </section>
  );
}

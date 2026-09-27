import { useEffect, useState } from "react";
import { fetchArticles } from "../services/articles";

export default function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadArticles() {
      try {
        const data = await fetchArticles();
        setArticles(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadArticles();
  }, []);

  if (loading) {
    return <p>Loading articles...</p>;
  }

  if (error) {
    return <p role="alert">Error: {error}</p>;
  }

  if (articles.length === 0) {
    return <p>No articles have been published yet.</p>;
  }

  return (
    <section aria-labelledby="articles-heading">
      <h2 id="articles-heading">Articles</h2>

      {articles.map((article) => (
        <article key={article.id}>
          <h3>{article.title}</h3>
          <p className="article-content">{article.content}</p>
          <time dateTime={article.created_at}>
            {new Date(article.created_at).toLocaleString()}
          </time>
        </article>
      ))}
    </section>
  );
}

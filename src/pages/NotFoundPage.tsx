import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <article className="prose-page">
      <h1>Not found</h1>
      <p>
        This page is not in the portfolio index. <Link to="/">Go home</Link>.
      </p>
    </article>
  );
}

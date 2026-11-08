import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className="page">
      <main className="container">
        <h1>404 Not Found</h1>
        <p>Страница не найдена.</p>
        <Link to="/">Вернуться на главную</Link>
      </main>
    </div>
  );
}

export { NotFoundPage };

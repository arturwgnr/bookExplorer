import { Outlet } from "react-router-dom";
import { useState } from "react";

export default function Dashboard() {

  const [book, setBook] = useState('');
  const [books, setBooks] = useState([]);

  async function fetchBook() {
    try {
      const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${(book).toLowerCase()}`)

      const data = await res.json();

      if(!data.items) {
        setBooks([]);

        return;
      }

      const mappedBooks = data.items.map((item: any) => (
        {
          id: item.id,
          title: item.volumeInfo?.title ?? "No title",
          authors: item.volumeInfo?.authors ?? [],
          pageCount: item.volumeInfo?.pageCount ?? 0,
        }
      ));

      setBooks(mappedBooks)

    } catch(err) {
      console.error('Error fetching books:', err);
      setBooks([])
    }
  }

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1 className="dashboard-title">📚 Book Explorer Pro</h1>
        <p className="dashboard-subtitle">
          Find, save and explore your favorite books
        </p>
      </header>

      <main className="dashboard-main">
        <div className="dashboard-search">
          <input value={book} onChange={(e) => setBook(e.target.value)}
            type="text"
            placeholder="Search for a book..."
            className="dashboard-input"
          />
          <button onClick={fetchBook} className="dashboard-button">Search</button>
        </div>

        <div className="dashboard-results">
  {books.map((b) => (
    <div key={b.id} className="book-card">
      <h3 className="book-title">{b.title}</h3>
      <p className="book-authors">
        {b.authors.length > 0 ? b.authors.join(", ") : "Unknown Author"}
      </p>
      <p className="book-pages">{b.pageCount} pages</p>
    </div>
  ))}
</div>

        <Outlet />
      </main>

      <footer className="dashboard-footer">
        <p>© 2025 Book Explorer Pro</p>
      </footer>
    </div>
  );
}

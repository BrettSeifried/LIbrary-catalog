import { Link } from 'react-router-dom';

export default function HomeDetail() {
  return (
    <div className="home">
      <h2>Welcome to Dangalfs Library of Computer Science!</h2>
      <p>
        Check out the amazing selection of books in our
        <Link to={`/books`}>Catalog;</Link>
      </p>
    </div>
  );
}

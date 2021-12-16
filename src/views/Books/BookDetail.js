import { useEffect, useState } from 'react';
import Book from '../../components/book/Book';
import { getBookById } from '../../services/books';
import { useParams } from 'react-router-dom';

function BookDetail() {
  const { id } = useParams(); // TODO: Use id from route
  const [book, setBook] = useState(null);

  useEffect(() => {
    getBookById(id).then(({ data }) => setBook(data));
  }, [id]);

  if (!book) return <h3>Loading book...</h3>;

  return <Book book={book} showDetail />;
}

export default BookDetail;

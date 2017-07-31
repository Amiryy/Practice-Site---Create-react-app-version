import React from 'react';
import '../styles/main.css';
import '../styles/library.css';

const StatelessBook = ({ books }) => (
  <ul>
    {books.map(book => <li key={book.id}>{book.title}</li>)}
  </ul> 
);

export default StatelessBook;
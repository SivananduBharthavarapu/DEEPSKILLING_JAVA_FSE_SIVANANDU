import React from 'react';

function BookDetails() {
  const books = [
    { title: 'Master React', price: 670 },
    { title: 'Deep Dive into Angular 11', price: 800 },
    { title: 'Mongo Essentials', price: 450 }
  ];

  return (
    <div className="section">
      <h2>Book Details</h2>
      <div className="card-row">
        {books.map((book, i) => (
          <div className="card" key={i}>
            <h3>{book.title}</h3>
            <p>₹{book.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookDetails;



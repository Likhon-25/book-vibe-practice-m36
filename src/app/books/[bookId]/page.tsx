import React from 'react';
interface IBookDetailsPageProps {
    params:Promise<{
        bookId: string
    }>
}
const getBooks = async () => {
  const res = await fetch("http://localhost:3000/booksData.json");
  const data = await res.json();
  return data;
};

const BookDetailsPage =async ({params} : IBookDetailsPageProps) => {

    const {bookId} = await params
    const 
    console.log(params

    );
    return (
        <div>
            <h2>All Books Details </h2>
        </div>
    );
};

export default BookDetailsPage;
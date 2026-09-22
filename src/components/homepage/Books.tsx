import React from "react";
import BookCard from "../shared/BookCard";
import { IBook } from "@/types/book.type";

const getBooks = async () => {
  const res = await fetch("http://localhost:3000/booksData.json");
  const data = await res.json();
  return data;
};

const Books = async () => {
  const booksData = await getBooks();

  return (
    <div className="container mx-auto px-4 py-7">
      {/* Section Title */}
      <div className="mb-8 text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#23BE0A]">
          Explore Books
        </p>

        <h2 className="font-serif text-3xl font-bold text-[#131313] md:text-4xl">
         Our Popular Books
        </h2>
      </div>

      {/* Books */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {booksData.slice(0,6).map((book : IBook) => {
          return (
            <BookCard key={book.bookId} book={book} />
          );
        })}
      </div>
    </div>
  );
};

export default Books;
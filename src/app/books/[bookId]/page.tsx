import { IBook } from "@/types/book.type";
import Image from "next/image";
import React from "react";

interface IBookDetailsPageProps {
  params: Promise<{
    bookId: string;
  }>;
}

const getBooks = async () => {
  const res = await fetch("http://localhost:3000/booksData.json");
  const data = await res.json();
  return data;
};

const BookDetailsPage = async ({ params }: IBookDetailsPageProps) => {
  const { bookId } = await params;

  const bookData = await getBooks();

  const book = bookData.find(
    (book: IBook) => String(book.bookId) === String(bookId),
  );

  return (
    <div className="container mx-auto px-4 py-10 md:py-16">
      <div className="grid items-center gap-10 rounded-3xl bg-white p-6 shadow-sm md:p-10 lg:grid-cols-[40%_60%] lg:p-12">
        {/* Book Image */}
        <div className="flex h-[450px] items-center justify-center rounded-2xl bg-[#f5f7f4] p-8">
          <Image
            src={book.image}
            alt={book.bookName}
            width={320}
            height={400}
            className="h-full w-auto object-contain drop-shadow-xl"
          />
        </div>

        {/* Book Details */}
        <div>
          {/* Category & Rating */}
          <div className="mb-5 flex flex-wrap gap-3">
            <span className="rounded-full bg-[#23BE0A]/10 px-4 py-2 text-sm font-semibold text-[#23BE0A]">
              {book.category}
            </span>

            <span className="rounded-full bg-yellow-50 px-4 py-2 text-sm font-semibold text-gray-700">
              ★ {book.rating}
            </span>
          </div>

          {/* Book Name */}
          <h1 className="font-serif text-4xl font-bold leading-tight text-[#131313] md:text-5xl">
            {book.bookName}
          </h1>

          {/* Author */}
          <p className="mt-3 text-gray-500">
            By{" "}
            <span className="font-semibold text-[#131313]">{book.author}</span>
          </p>

          <div className="my-6 h-px bg-gray-200" />

          {/* Review */}
          <div>
            <h2 className="mb-2 text-lg font-bold text-[#131313]">Review</h2>

            <p className="text-sm leading-7 text-gray-600">{book.review}</p>
          </div>

          {/* Tags */}
          <div className="mt-6">
            <h3 className="mb-3 text-sm font-bold text-[#131313]">Tags</h3>

            <div className="flex flex-wrap gap-2">
              {book.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="rounded-full bg-[#23BE0A]/10 px-4 py-1.5 text-xs font-medium text-[#23BE0A]"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Book Information */}
          <div className="mt-7 grid grid-cols-2 gap-4 border-y border-gray-200 py-6 sm:grid-cols-4">
            <div>
              <p className="text-xs text-gray-400">Pages</p>
              <p className="mt-1 font-semibold text-[#131313]">
                {book.totalPages}
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-400">Publisher</p>
              <p className="mt-1 font-semibold text-[#131313]">
                {book.publisher}
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-400">Published</p>
              <p className="mt-1 font-semibold text-[#131313]">
                {book.yearOfPublishing}
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-400">Rating</p>
              <p className="mt-1 font-semibold text-[#131313]">{book.rating}</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-7 flex gap-3">
            <button className="rounded-xl bg-[#23BE0A] px-6 py-3 font-semibold text-white transition hover:bg-[#1fa308]">
              Read
            </button>

            <button className="rounded-xl border border-gray-300 px-6 py-3 font-semibold text-[#131313] transition hover:bg-gray-50">
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;

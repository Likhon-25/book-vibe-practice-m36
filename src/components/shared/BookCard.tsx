import { IBook } from "@/types/book.type";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IbookCardProps {
  book: IBook;
}

const BookCard = ({ book }: IbookCardProps) => {
  return (
    <div
      key={book.bookId}
      className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      {/* Image */}
      <div className="relative flex h-[300px] items-center justify-center bg-[#f5f7f4] p-6">
        <Image
          src={book.image}
          alt={book.bookName}
          width={220}
          height={280}
          className="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105"
        />

        {/* Category */}
        <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-[#23BE0A] shadow-sm">
          {book.category}
        </span>

        {/* Rating */}
        <span className="absolute right-4 top-4 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-gray-700 shadow-sm">
          ★ {book.rating}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-serif text-2xl font-bold text-[#131313]">
          {book.bookName}
        </h3>

        <p className="mt-1 text-sm text-gray-500">
          by <span className="font-medium text-gray-700">{book.author}</span>
        </p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {book.tags.map((tag) => {
            return (
              <span
                key={tag}
                className="rounded-full bg-[#23BE0A]/10 px-3 py-1 text-xs font-medium text-[#23BE0A]"
              >
                #{tag}
              </span>
            );
          })}
        </div>

        {/* Bottom Information */}
        <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
          <div>
            <p className="text-xs text-gray-400">Publisher</p>
            <p className="mt-1 text-sm font-semibold text-gray-700">
              {book.publisher}
            </p>
          </div>

          <div className="text-right">
            <p className="text-xs text-gray-400">Pages</p>
            <p className="mt-1 text-sm font-semibold text-gray-700">
              {book.totalPages}
            </p>
          </div>
        </div>

        {/* Year */}
        <div className="mt-3 text-xs text-gray-400">
          Published in{" "}
          <span className="font-medium text-gray-600">
            {book.yearOfPublishing}
          </span>
        </div>

        {/* View Details */}
        <Link href={`/books/${book.bookId}`}>
        
        <button className="mt-5 w-full rounded-xl bg-[#23BE0A] px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#1fa308] hover:shadow-md">
          View Details
        </button>
        </Link>
      </div>
    </div>
  );
};

export default BookCard;

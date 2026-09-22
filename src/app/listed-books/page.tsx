"use client";

import { BooksContext } from "@/components/context/BookContext";
import Image from "next/image";
import React, { useContext, useState } from "react";

const ListedBooksPage = () => {
  const { readbooks, wishlist } = useContext(BooksContext);

  const [activeTab, setActiveTab] = useState<"read" | "wishlist">("read");

  const books = activeTab === "read" ? readbooks : wishlist;

  return (
    <div className="container mx-auto px-4 py-10 md:py-14">
      {/* Heading */}
      <div className="mb-8 text-center">
        <h1 className="font-serif text-3xl font-bold text-[#131313] md:text-4xl">
          Listed Books
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          Manage your read books and wishlist
        </p>
      </div>

      {/* Tabs */}
      <div className="mb-8 flex justify-center">
        <div className="flex rounded-xl bg-gray-100 p-1">
          <button
            onClick={() => setActiveTab("read")}
            className={`rounded-lg px-6 py-3 text-sm font-semibold transition-all ${
              activeTab === "read"
                ? "bg-white text-[#23BE0A] shadow-sm"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Read List ({readbooks.length})
          </button>

          <button
            onClick={() => setActiveTab("wishlist")}
            className={`rounded-lg px-6 py-3 text-sm font-semibold transition-all ${
              activeTab === "wishlist"
                ? "bg-white text-[#23BE0A] shadow-sm"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Wishlist ({wishlist.length})
          </button>
        </div>
      </div>

      {/* Books */}
      {books.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-gray-300 py-16 text-center">
          <h2 className="text-xl font-semibold text-gray-700">
            {activeTab === "read"
              ? "No books in your read list"
              : "No books in your wishlist"}
          </h2>

          <p className="mt-2 text-sm text-gray-400">
            Your books will appear here.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {books.map((book) => (
            <div
              key={book.bookId}
              className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Image */}
              <div className="relative flex h-[280px] items-center justify-center bg-[#f5f7f4] p-6">
                <Image
                  src={book.image}
                  alt={book.bookName}
                  width={200}
                  height={250}
                  className="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                />

                <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-[#23BE0A] shadow-sm">
                  {book.category}
                </span>

                <span className="absolute right-4 top-4 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-gray-700 shadow-sm">
                  ★ {book.rating}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h2 className="font-serif text-2xl font-bold text-[#131313]">
                  {book.bookName}
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  by{" "}
                  <span className="font-medium text-gray-700">
                    {book.author}
                  </span>
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {book.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#23BE0A]/10 px-3 py-1 text-xs font-medium text-[#23BE0A]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Info */}
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

                <p className="mt-3 text-xs text-gray-400">
                  Published in{" "}
                  <span className="font-medium text-gray-600">
                    {book.yearOfPublishing}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ListedBooksPage;
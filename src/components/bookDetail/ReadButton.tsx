"use client";
import { IBook } from "@/types/book.type";
import React, { useContext } from "react";
import { BooksContext } from "../context/BookContext";

const ReadButton = ({ book }: { book: IBook }) => {
  const { readbooks, setReadBooks } = useContext(BooksContext);

  const handleClick = () => {
    setReadBooks([...readbooks, book])
    alert(`you have read ${book.bookName}`)
  };
  return (
    <div>
      <button
        onClick={() => handleClick()}
        className="rounded-xl bg-[#23BE0A] px-6 py-3 font-semibold text-white transition hover:bg-[#1fa308]"
      >
        Read
      </button>
    </div>
  );
};

export default ReadButton;

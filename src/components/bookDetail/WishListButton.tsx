"use client";
import { IBook } from "@/types/book.type";
import React, { useContext } from "react";
import { BooksContext } from "../context/BookContext";

const WishlistPage = ({ book }: { book: IBook }) => {
  const { wishlist, setWishlist } = useContext(BooksContext);

  const handleClick = () => {
    setWishlist([...wishlist, book]);
    alert(`you added wishlist the ${book.bookName}`);
  };
  return (
    <div>
      <button
        onClick={() => handleClick()}
        className="rounded-xl bg-[#23BE0A] px-6 py-3 font-semibold text-white transition hover:bg-[#1fa308]"
      >
        WishList
      </button>
    </div>
  );
};

export default WishlistPage;

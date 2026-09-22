'use client'
import { BooksContext } from "@/components/context/BookContext";
import React, { useContext } from "react";

const ListedBooksPage = () => {
  const { readbooks } = useContext(BooksContext)
  return <div>Listed Books</div>;
};

export default ListedBooksPage;

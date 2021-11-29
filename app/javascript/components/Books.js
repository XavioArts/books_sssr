import React from "react";
import Book from "./Book";

const Books = (props) => {
    const {books, updateBook, deleteBook} = props;
    return (
        <div>
            <h2>Books List:</h2>
            {books.map((book) => (
                <Book key={book.id} {...book} updateBook={updateBook} deleteBook={deleteBook}/>
            ))}
        </div>
    )
};

export default Books;
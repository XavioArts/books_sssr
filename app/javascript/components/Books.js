import React from "react";
import Book from "./Book";

const Books = (props) => {
    const {books} = props;
    return (
        <div>
            <h2>Books List:</h2>
            {books.map((book) => (
                <Book key={book.id} {...book} />
            ))}
        </div>
    )
};

export default Books;
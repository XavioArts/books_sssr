import React from "react";

const Book = (props) => {
    const {title, author} = props;
    return (
        <div>
            <h3>{title}</h3>
            <p>By {author}</p>
        </div>
    );
};

export default Book;
import React, {useState} from "react";
import BookForm from "./BookForm";

const Book = (props) => {
    const {id, title, author, updateBook, deleteBook} = props;
    const [formVis, setFormVis] = useState(false);

    const toggleForm = () => {
        setFormVis(!formVis);
    };

    return (
        <div>
            <h3>{title}</h3>
            <p>By {author}</p>
            <button onClick={toggleForm}>
                {formVis ? "Cancel" : "Edit Book"}
            </button>
            {formVis && <BookForm id ={id} title={title} author={author} updateBook={updateBook}/>}
            <button onClick={() => deleteBook(id)}>Delete this book</button>
        </div>
    );
};

export default Book;
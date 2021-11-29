import React, {useState} from "react";
import axios from "axios";

const BookForm = (props) => {
    const {id, addBook, title: initTitle, author: initAuthor, updateBook} = props;
    const [title, setTitle] = useState(initTitle ? initTitle : "");
    const [author, setAuthor] = useState(initAuthor ? initAuthor : "");
    // using ternary to determine if an initial value exists, if so use that value. 

    const handleSubmit = async (event) => {
        event.preventDefault();
        // makes sure the submit does not reload the page
        const book = {title: title, author: author};
        if (id) {
            let result = await axios.put(`/books/${id}`, book);
            updateBook(result.data);
        } else {
            let result = await axios.post("/books", book);
            addBook(result.data);
        }
    };

    return (
        <div style={styles.container}>
            <h2>{id ? "Edit" : "New" } Book Form</h2>
            <form onSubmit={handleSubmit}>
                <p>Title</p>
                <input value={title} onChange={(e) => setTitle(e.target.value)}/>
                <p>Author</p>
                <input value={author} onChange={(e) => setAuthor(e.target.value)}/>
                <button>Submit</button>
            </form>
        </div>
    );
};

const styles = {
    container: {
        margin: "10px",
        padding: "10px",
        backgroundColor: "#aaa",
        textAlign: "center",
    }
};

export default BookForm;
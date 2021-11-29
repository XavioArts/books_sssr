import React, {useState, useEffect} from "react";
import axios from "axios";
import Books from "./Books";
import BookForm from "./BookForm";


const App = () => {

    const [books, setBooks] = useState([]);
    const [formVis, setFormVis] = useState(false);

    useEffect(()=>{
        getBooks();
    }, []);

    const getBooks = async () => {
        let result = await axios.get("/books");
        setBooks(result.data);
    }

    const toggleForm = () => {
        setFormVis(!formVis);
    };

    const addBook = (book) => {
        setBooks([...books, book]);
    };

    const updateBook = (book) => {
        let editedBooks = books.map((bk) => (bk.id === book.id ? book : bk));
        setBooks(editedBooks);
    };

    const deleteBook = async (id) => {
        let result = await axios.delete(`/books/${id}`);
        //this actually delets from database
        let newBooks = books.filter((bk) => bk.id !== id);
        setBooks(newBooks);
        // this updates the ui
    };

    return (
        <div>
            <div style={appStyle.container}>
                <h1 style={{color: "white"}}>App Home</h1>
            </div>
            <button onClick={toggleForm}>
                {formVis ? "Cancel" : "New Book"}
            </button>
            {formVis && <BookForm addBook={addBook}/>}
            <Books books={books} updateBook={updateBook} deleteBook={deleteBook}/>
        </div>
    );
};

const appStyle = {
    container: {backgroundColor: "#1d44b8", textAlign: "center", padding: "20px", margin: "10px"}
}

export default App;
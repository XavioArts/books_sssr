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

    return (
        <div>
            <div style={appStyle.container}>
                <h1 style={{color: "white"}}>App Home</h1>
            </div>
            <button onClick={toggleForm}>
                {formVis ? "Cancel" : "New Book"}
            </button>
            {formVis && <BookForm addBook={addBook}/>}
            <Books books={books} />
        </div>
    );
};

const appStyle = {
    container: {backgroundColor: "#1d44b8", textAlign: "center", padding: "20px", margin: "10px"}
}

export default App;
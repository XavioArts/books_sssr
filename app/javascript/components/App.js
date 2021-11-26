import React, {useState, useEffect} from "react";
import axios from "axios";
import Books from "./Books";


const App = () => {

    const [books, setBooks] = useState([]);
    useEffect(()=>{
        getBooks();
    }, []);

    const getBooks = async () => {
        let result = await axios.get("/books");
        setBooks(result.data);
    }

    return (
        <div>
            <div style={appStyle.container}>
                <h1 style={{color: "white"}}>App Home</h1>
            </div>
            <Books books={books} />
        </div>
    );
};

const appStyle = {
    container: {backgroundColor: "#1d44b8", textAlign: "center", padding: "20px", margin: "10px"}
}

export default App;
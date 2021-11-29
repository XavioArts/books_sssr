import React from "react";

const BookForm = () => {
    return (
        <div style={styles.container}>
            <h2>Book Form</h2>
            <form>
                <p>Title</p>
                <input />
                <p>Author</p>
                <input />
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
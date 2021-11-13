import React, { useEffect, useState } from 'react';

const ManageBooks = () => {
    const [books, setBooks] = useState([]);

     // Load Data
     useEffect(() => {
        fetch("https://murmuring-brook-36809.herokuapp.com/manageBooks")
            .then((res) => res.json())
            .then((data) => setBooks(data));
    }, [books]);

    // Delete Book 
    const handleDelete = (id) => {
        const process = window.confirm("Delete order?");
        if (process) {
            fetch(
                `https://murmuring-brook-36809.herokuapp.com/allBooks/${id}`, {
                    method: "DELETE",
                })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        alert("Order deleted successfully");
                        const restBooks = books?.filter(
                            deleteBook => deleteBook._id !== id
                        );
                        setBooks(restBooks);
                    }
                });
        }
    };
    return (
        <div className='container my-5 col-sm-12'>
            <h5>All Books</h5>
            <div className='row row-cols-1 row-cols-md-4 g-4 my-3 mx-auto'>
            {books.map(book => (
                <div key={book?._id} className="col text-start shadow rounded m-3 p-3 shadow rounded">
                <img src={book?.img} className="img-fluid rounded" alt="..." />
                <div className="card-text text-center mt-2">
                <h6 className='text-danger'>{book?.service}</h6>
                <h6>Ordered by: <span className='text-primary'>{book?.name}</span></h6>
                <button className='btn btn-warning m-1' onClick={() => handleDelete(book?._id)}>Delete</button>
                </div>
                </div>
            ))}
            </div>
        </div>
    );
};

export default ManageBooks;
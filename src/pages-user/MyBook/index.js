import React, { useState, useEffect } from "react";

import BookList from '../../components/book-list';

import api from "../../services/api";



export default function MyBooks() {



    const [book, setBook] = useState('');

    useEffect(() => {
        async function loadBooks() {
            const user_id = localStorage.getItem('user');
            const books = await api.get(`/spots/bookings`, {
                headers: { user_id },
            });

            console.log(books);
            console.log(user_id);
            setBook(books.data);
        }
        loadBooks();
    }, []);

    return (
        <div>
            {book && (<BookList books={book}/>)}
        </div>
    )
}
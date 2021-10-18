import React from "react";
import { Link} from 'react-router-dom';

import imag from '../../assets/imag.png';

import './styles.css'

export default function Books({ books }) {

    
    
    console.log("Books");
    return <div className="books">
         <h1>Dados Das Reservas</h1>
        {books.map((book) => (
            <div className="book">
                <img onError={(e) => e.target.src= imag} className="book-thumbnail" src={book.spot.thumbnail_url ? book.spot.thumbnail_url : imag } alt="" />

                <div className="book-span">

                    <span><strong>{'E-mail: '}</strong>{book.user.email}</span>
                    <span><strong>{'Data de Reserva: '}</strong>{book.date}</span>
                    <span><strong>{'Company: '}</strong>{book.spot.company}</span>
                    <span><strong>{'Valor do Spot: R$'}</strong>{book.spot.price}</span>
                    <hr />
                </div>
                
            </div>

        ))}
        <button className="btn6">
            <Link className='text-link' to="/list">Voltar</Link>
        </button>
    </div>

}
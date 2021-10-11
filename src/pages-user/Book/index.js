import React, { useState } from "react";

import { useParams } from 'react-router-dom'


import './styles.css';

import api from "../../services/api";

export default function Book({ history }) {

    const {id} = useParams();
    const [date, setDate] = useState('');
   

    async function handleSubmit(e) { 
        e.preventDefault();
        const user_id = localStorage.getItem('user');

        await api.post(`spots/${id}/bookings`, {
            date
        }, {
            headers: { user_id }
        })

        alert('Solicitação de reserva enviada.');

        history.push('/List');
    }

    function handleCancel() {
        history.push('/List');
    }

    return (
        <div>
            <form>
                <label htmlFor="text">DATA DE INTERESSE *</label>
                <input

                    type="text" required
                    id="text"
                    placeholder="Qual data você quer reservar?"
                    value={date}

                    //resebe um evento, e seta o valor do email
                    onChange={event => setDate(event.target.value)}
                />
                <button onClick={(e) => handleSubmit(e)} className="btn" type="submit" >
                    Solicitar reserva
                </button>
                <button onClick={handleCancel} className="btn1" type="submit">
                    Cancelar
                </button>
            </form>
        </div>
    );
}
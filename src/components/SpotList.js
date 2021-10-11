import React, { useState, useEffect } from "react";

import {useHistory} from 'react-router-dom'




import api from '../services/api';

import './styles.css';

export default function SpotList({tech}) {

    const [spots, setSpots] = useState([]);

    const history = useHistory();

    useEffect(() => {
        async function loadSpots() {
            const response = await api.get('/spots', {
                params: { tech }
            });

            setSpots(response.data);
            console.log(response.data)
        }
        loadSpots();
    }, [tech]);

    function handleNavigate(id) {
        history.push(`Book/${id}`)
    }

    return (
        <>
            <p>
                Empresas que usam <strong>{tech}</strong>
            </p>

            <ul className="spot-list">
                {spots.map(spot => (
                    <li key={spot => spot._id}>
                        <header style={{ backgroundImage: `url(${spot.thumbnail_url})` }} />
                        <strong>{spot.company}</strong>
                        <span>{spot.price ? `R$${spot.price}/dia` : 'GRATUITO'}</span>
                       
                        <button onClick={() => handleNavigate(spot._id)} className="btn" type="submit" >
                            Solicitar reserva
                        </button>
                        
                       
                    </li>
                ))}
            </ul>
        </>
    )
}
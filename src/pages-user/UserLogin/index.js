import React from "react";

import api from '../../services/api'

import { useState, useEffect } from "react";

import {Link} from 'react-router-dom';

import './styles.css'

//history = usado para fazer navegação 
export default function Login({ history }) {

    const [email, setEmail] = useState('');
    const [techs, setTechs] = useState('');

    //verifica se o usuário está logado, e direciona ele pra tela de list
    useEffect(() => {
        const login = localStorage.getItem('user');
        if (login) {
            history.push('/list');
        }
    }, [history]);

    async function handleSubmit(event) {
        //não redirecionar para outra tela
        event.preventDefault();

        const response = await api.post('/sessions', { email })

        //console.log(response);

        const { _id } = response.data;

        //console.log(_id);

        localStorage.setItem('user', _id);
        localStorage.setItem('techs', techs);

        history.push('/list');

        //console.log(email);
        // console.log(techs);

    }
    return (
        <>
            <form onSubmit={handleSubmit}>

                <label htmlFor="email">E-MAIL *</label>
                <input

                    type="email" required
                    id="email"
                    placeholder="Seu E-email"
                    value={email}

                    //resebe um evento, e seta o valor do email
                    onChange={event => setEmail(event.target.value)}

                />
                <label htmlFor="text">TECNOLOGIAS *</label>
                <input

                    type="text" required
                    id="text"
                    placeholder="Tecnologias de Interesse"
                    value={techs}

                    //resebe um evento, e seta o valor da tecnologia
                    onChange={event => setTechs(event.target.value)}
                />

                <button className="btn" type="submit" >
                    Encontrar Spots
                </button>

                <button className="btn1" type="submit">
                    <Link className='text-link' to="/dashboard">Voltar para o Dashboard</Link>
                </button>

            </form>
        </>
    )
}
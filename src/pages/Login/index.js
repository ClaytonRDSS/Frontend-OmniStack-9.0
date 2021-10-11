import React from "react";
import api from '../../services/api'

import { useState } from "react";

//history = usado para fazer navegação 
export default function Login({history}) {

    const [email, setEmail] = useState('');

  async function handleSubmit(event) {
    //não redirecionar para outra tela
    event.preventDefault();

    const response = await api.post('/sessions', { email })

    //console.log(response);

    const {_id} = response.data;

    //console.log(_id);

    localStorage.setItem('user', _id);

    history.push('/dashboard');

  }
    return (
        <>
        <p>
          Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa.
        </p>

        <form onSubmit={handleSubmit}>

          <label htmlFor="email">E-MAIL *</label>
          <input
            required
            type="email"
            id="email"
            placeholder="Seu Melhor -email"
            value={email}

            //resebe um evento, e seta o valor do email
            onChange={event => setEmail(event.target.value)}

          />

          <button className="btn" type="submit" >
            Entrar
          </button>

        </form>
        </>
    )
}
//(useMemo = function todaver que um estado é auterado, o componente e motado novamente)
import React, { useState, useMemo } from "react";
import api from '../../services/api';

import {Link} from 'react-router-dom';

import camera from "../../assets/camera.svg";

import './styles.css';

export default function New({ history }) {

    const [thumbnail, setThumbnail] = useState(null);
    const [company, setCompany] = useState('');
    const [techs, setTechs] = useState('');
    const [price, setPrice] = useState('');

    const preview = useMemo(() => {
        return thumbnail ? URL.createObjectURL(thumbnail) : null;
    }, [thumbnail])

    async function handleSubmit(event) {
        event.preventDefault();

        const data = new FormData();
        const user_id = localStorage.getItem('user');

        data.append('thumbnail', thumbnail);
        data.append('company', company);
        data.append('techs', techs);
        data.append('price', price);

        await api.post('/spots', data, {
            headers: { user_id }
        })

        history.push('/dashboard');
    }
    return (
        <form onSubmit={handleSubmit}>

            <label

                id="thumbnail"
                style={{ backgroundImage: `url(${preview})` }}
                className={thumbnail ? 'has-thumbnail' : ''}
            >
                <input type="file" onChange={event => setThumbnail(event.target.files[0])} />
                <img src={camera} alt="Select img" />
            </label>

            <label htmlFor="company">EMPRESA *</label>
            <input

                id="company"
                placeholder="Sua Empresa incrível"
                value={company}
                onChange={enent => setCompany(enent.target.value)}

            />

            <label htmlFor="techs">TECNOLOGIA * <span>(separadas por vírgula)</span></label>
            <input

                id="techs"
                placeholder="Quais tecnologias usam?"
                value={techs}
                onChange={enent => setTechs(enent.target.value)}

            />

            <label htmlFor="price">VALOR DA DIÁRIA *<span>(em branco para GRATUITO)</span></label>
            <input

                id="price"
                placeholder="Valor Cobrado por dia "
                value={price}
                onChange={enent => setPrice(enent.target.value)}

            />
            <button type="submit" className="btn">Cadastrar</button>

            <button className="btn-new" type="submit">
                <Link className='text-link' to="/dashboard">Voltar para o Dashboard</Link>
            </button>
        </form>
    )
}
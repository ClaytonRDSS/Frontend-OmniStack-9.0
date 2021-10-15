import React from "react";
import { useState, useEffect } from "react";

import {useHistory} from 'react-router-dom';

import SpotList from "../../components/spot-list/SpotList";

import './styles.css'

export default function List(props) {

    const history = useHistory();

    const [techs, setTechs] = useState([]);

    useEffect(() => {
        const tech = localStorage.getItem('techs');

        if(!tech) {
           return history.push('/user-login');
        }
        
        setTechs(tech.split(','));
        
    
}, []);

return (
    <div>

        {techs.map(tech => <SpotList key={tech} tech={tech} />)}
    </div>
)
}
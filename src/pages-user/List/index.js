import React from "react";
import { useState, useEffect } from "react";

import SpotList from "../../components/SpotList";


export default function List(props) {
    const [techs, setTechs] = useState([]);

    useEffect(() => {
        const techsArray = localStorage.getItem('techs').split(',');

        setTechs(techsArray);
        console.log(techsArray);

}, []);

return (
    <div>
        {techs.map(tech => <SpotList key={tech} tech={tech} />)}
    </div>
)
}
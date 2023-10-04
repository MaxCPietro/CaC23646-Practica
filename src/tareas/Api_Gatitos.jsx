import React, { useEffect, useState } from 'react'

const Api_Gatitos = () => {

    const [fotoGato,setFotoGato] = useState('');
    
    const handleOtroGato = () => {traerGatoApi()}

    const traerGatoApi = async () => {  
        const endpoint = 'https://api.thecatapi.com/v1/images/search';
        const response = await fetch (endpoint);
        console.log(response);
        const data = await response.json();
        console.log(data);
        const gatitoPic = data[0].url;
        setFotoGato(gatitoPic);
    }

    useEffect (() => {
        traerGatoApi();
    },[]);

    return (
        <div>
            <div><h1>Api Gatitos</h1></div>
            <div><button onClick={handleOtroGato}>Otro Gato</button></div>
            <div><img src={fotoGato}
                alt="gato de la API thecatapi.com" 
                title="gatito_radom"
                width="642" height="639" /></div>
        </div>
    )
}

export default Api_Gatitos
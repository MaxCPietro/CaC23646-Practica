import React, { useEffect, useState } from 'react'

const Api_Gatitos = () => {
    //Estados de la API REQUEST: LOADED, LOADING y REJECTED
    const [fotoGato,setFotoGato] = useState('');
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    
    const traerGatoApi = async () => {  
        setError(null);
        setIsLoading(true);
        try {
            const endpoint = 'https://api.thecatapi.com/v1/images/search';
            const response = await fetch (endpoint);
            
            //capturo si no hay rta de la API
            if(!response.ok) {
                throw new Error('ESTA API NO FUNCIONA');
            }
            console.log(response);
            const data = await response.json();
            console.log(data);
            const gatitoPic = data[0].url;
            setFotoGato(gatitoPic);
        } 
        catch (e) {setError(e.message);} 
        finally {setIsLoading(false);} 
    }

    useEffect (() => {
        traerGatoApi();
    },[]);

    return (
        <div>
            <div><h1>Api Gatitos</h1></div>
            <div>
                {isLoading && <h1>CARGANDO!!</h1>}
                {error && <h1>{error}</h1>}
                {
                <img src={fotoGato}
                alt="gato de la API thecatapi.com" 
                title="gatito_radom"
                width="642" height="639" />
                }
            </div>
        </div>
    )
}

export default Api_Gatitos
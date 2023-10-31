import React, { useEffect, useState } from 'react'
import axios from 'axios';

export const useMultiAxios = () => {
  //Estados de la API REQUEST: LOADED, LOADING y REJECTED
    const [promesasLoaded,setPromesasLoaded] = useState('');
    const [promesasRejected, setPromesasRejected] = useState(null);
    const [pormesasLoading, setPromesasLoading] = useState(false);

    useEffect(() => {
        const getData = async () => {
            try {
                setPromesasRejected(null);
                setPromesasLoading(true);

                const promesas = await Promise.all([
                    axios.get('https://jsonplaceholder.org/posts'),
                    axios.get('https://jsonplaceholder.org/users'),
                    ],
                );

                const [{data:dataPosts},{data:dataUsers}] = promesas;
                
                //console.log('Data Posts:', dataPosts);
                //console.log('Data Users:', dataUsers);

                setPromesasLoaded({dataPosts, dataUsers});

                const promesasConReduce = promesas.reduce(
                    (acc,el,i) => ({
                        ...acc,
                        [`PROMESA: ${i+1}`]: el.data,
                    }), {}
                )
                console.log('Promesas con Reduce:', promesasConReduce);

            }  catch (e) {
                setPromesasRejected(e);
                console.log("mensaje: "+ e.message);
                console.log("Data: "+ e.response.data);
                console.log("Status: "+ e.response.status);
            } finally { setPromesasLoading(false); }
        };       
        getData();
    }, []);

    return {
        promesasLoaded,
        promesasRejected,
        pormesasLoading,
    }
}
export default useMultiAxios;
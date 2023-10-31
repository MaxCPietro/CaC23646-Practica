import React from 'react';
import {useMultiAxios} from './useMultiAxios';

const VariasPromesas = () => {
    const {promesasLoaded, promesasRejected, pormesasLoading} = useMultiAxios();

    return (
        <div>VariasPromesas</div>
    )
}

export default VariasPromesas
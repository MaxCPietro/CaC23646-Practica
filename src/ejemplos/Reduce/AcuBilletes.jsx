import React from 'react'

const AcuBilletes = () => {
    //Array de billetes
    const billetes = [2000, 1000, 500, 200, 100];

    //Objeto billetera
    //let billetera = {}

    //Acumulador
    /*for (let i = 0; i < billetes.length; i++) {
        billetera = {...billetera,
                    [`BILLETE: ${i+1}`]: billetes[i]};
    }*/

    //console.log(billetera);

    //Con Reduce
    const billeteraConReduce = billetes.reduce(
        (billetera, NULL, i) => ({
        ...billetera,
        [`BILLETE: ${i+1}`]: billetes[i],}), {});

    console.log(`Billetera con reduce: `, billeteraConReduce);


    return (
        <div>AcuBilletes</div>
    )
}

export default AcuBilletes


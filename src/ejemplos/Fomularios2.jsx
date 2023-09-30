import React, { useState } from 'react'

const Fomularios2 = () => {

const [userLogin, setUserLogin] = useState("");

const handleChange = (e) => {
    //Agrego validación en tiempo real"
    if (e.target.value.includes("MAXI")) {
        console.log("Tu nombre está prohibido");
    }
    setUserLogin(e.target.value);
    console.log(e.target.value);
};

return (
    <div>
        <input type="text" 
                id="prueba"
                onChange={(e) => handleChange(e)}
                value = {userLogin}/>
    </div>
)}

export default Fomularios2
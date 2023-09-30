import React, { useState } from "react";

function Guardado() {
    const [localStorageValue, setLocalStorageValue] = useState("");
    const [sessionStorageValue, setSessionStorageValue] = useState("");

  // Función para manejar cambios en el valor de localStorage
    const handleLocalStorageChange = (e) => {
        const newValue = e.target.value;
        setLocalStorageValue(newValue);
        localStorage.setItem("localData", newValue);
    };

  // Función para manejar cambios en el valor de sessionStorage
    const handleSessionStorageChange = (e) => {
        const newValue = e.target.value;
        setSessionStorageValue(newValue);
        sessionStorage.setItem("sessionData", newValue);
    };

    return (
        <div>
            <h1>LocalStorage and SessionStorage Example</h1>
        <div>
            <label>Local Storage:</label>
            <input
                type="text"
                value={localStorageValue}
                onChange={handleLocalStorageChange}
            />
            <p>Value in Local Storage: {localStorage.getItem("localData")}</p>
        </div>
        <div>
            <label>Session Storage:</label>
            <input
                type="text"
                value={sessionStorageValue}
                onChange={handleSessionStorageChange}
            />
            <p>Value in Session Storage: {sessionStorage.getItem("sessionData")}</p>
        </div>
    </div>
    );
}

export default Guardado;

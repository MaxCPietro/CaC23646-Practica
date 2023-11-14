import { useContext } from "react";
import { AuxContext } from "../Auth/context/AuxContext";

export const useAuth = () => {
    const {isLoaggedIn} = useContext(AuxContext);
    return {isLoaggedIn}
}
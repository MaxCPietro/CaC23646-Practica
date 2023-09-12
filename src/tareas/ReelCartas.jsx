import React, {useState} from "react"

const ReelCartas = ({users}) => {

    const [index,setIndex] = useState(0);

    const handleNextUser = () => {
        setIndex(index + 1);
    };

    return (
        <div>
            <button onClick={handleNextUser}>{"->"}</button>
            <p>{JSON.stringify(users[index])}</p>
            <button onClick={() => {}}>{"<-"}</button>
        </div>
    );
}

export default ReelCartas

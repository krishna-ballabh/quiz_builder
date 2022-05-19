import React from "react";
import {useNavigate} from "react-router-dom";
function Home(){
    const navigate = useNavigate();
    return(
        <>
            <p>Welcome to Quiz Creator</p>
        </>
    );
}

export default Home;
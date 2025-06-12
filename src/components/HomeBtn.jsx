import React from "react";
import { Link } from 'react-router-dom';

function HomeBtn() {
    return (
        <>
        <Link to="/">
            <button className="home-button"><img src="https://i.imgur.com/Rh1obTr.png" alt="" /></button>
        </Link>
        </>
    );
}
export default HomeBtn;
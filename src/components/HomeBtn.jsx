import React from "react";
import { Link } from 'react-router-dom';

function HomeBtn() {
    return (
        <>
        <Link to="/">
            <button className="start-button">Home</button>
        </Link>
        </>
    );
}
export default HomeBtn;
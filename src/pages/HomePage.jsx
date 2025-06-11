import Logo1 from "../img/pokeball-logo.png"
import Logo2 from "../img/poke-logo.png"
import React from "react";
import { Link } from 'react-router-dom';
import LogOutBtn from "../components/LogOutBtn";

function HomePage() {
    function checkLoggedIn() {
        const token = localStorage.getItem("token");
        if (token) {
            return true;
        } else {
            return false;
        }
    }
    return (
        <>

                <div className='start-container'>
                    <div className='logo-container'>
                        <img className='logo-img2' src={Logo2} alt='Pokemon' />
                        <img className='logo-img1' src={Logo1} alt='Pokeball' />
                    </div>
                    <Link to="/browse">
                        <button className="start-button">Browse</button>
                    </Link>
                    {checkLoggedIn() ? (
                    <>
                        <Link to="/mycollection">
                            <button className="start-button">My Collection</button>
                        </Link>
                        <Link to="/wishlist">
                            <button className="start-button">My Wishlist</button>
                        </Link>
                        <LogOutBtn/>
                    </>
                    ) : 
                    <Link to="/login">
                        <button className="start-button">Log in</button>
                    </Link> }
                </div>
        </>
    );
}
export default HomePage;
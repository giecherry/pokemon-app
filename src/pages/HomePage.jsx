import Logo1 from "../img/pokeball-logo.png"
import Logo2 from "../img/poke-logo.png"
import React from "react";
import { Link } from 'react-router-dom';

function HomePage() {
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
                    <Link to="/mycollection">
                        <button className="start-button">My Collection</button>
                    </Link>
                    <Link to="/LoginPage">
                        <button className="start-button">Login</button>
                    </Link> 
                </div>
        </>
    );
}
export default HomePage;
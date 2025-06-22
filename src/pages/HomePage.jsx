import React from "react";
import { Link } from 'react-router-dom';
import Button from "../components/Button";

function HomePage() {

    const checkLoggedIn = () => {
        const token = localStorage.getItem("token");
        if (token) {
            return true;
        } else {
            return false;
        }
    }

    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.href = "/login";
    };
    
    return (
        <>

                <div className='start-container'>
                    <div className='logo-container'>
                        <img className='logo-img2' src="https://i.imgur.com/lwSv6Pb.png" alt='Pokemon' />
                        <img className='logo-img1' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1024px-Pok%C3%A9_Ball_icon.svg.png" alt='Pokeball' />
                    </div>
                    <Link to="/browse">
                        <Button className="start-button">Browse</Button>
                    </Link>
                    {checkLoggedIn() ? (
                    <>
                        <Link to="/mycollection">
                            <Button className="start-button">My Collection</Button>
                        </Link>
                        <Link to="/wishlist">
                            <Button className="start-button">My Wishlist</Button>
                        </Link>
                        <Button className="logout-btn" onClick={handleLogout}>
                        Log Out
                        </Button>
                    </>
                    ) : 
                    <Link to="/login">
                        <Button className="start-button">Log in</Button>
                    </Link> }
                </div>
        </>
    );
}
export default HomePage;
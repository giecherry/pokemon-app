import { Link } from 'react-router-dom';
import HomeBtn from '../components/HomeBtn';

function SignUp() {
    return (
        <div className="signup-page">
            <form>
                <h1>Welcome!</h1>
                <h3>Become a member to track favorites, wishlist what you want and organize your collection</h3>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" required />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <span>Already a member? <Link to="/login">Log in!</Link></span>
                <button type="submit">Register</button>
            </form>
            <HomeBtn />
        </div>
    );
}
export default SignUp;
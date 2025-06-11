import { Link } from 'react-router-dom';

function SignUp() {
    return (
        <div className="login-page">
            <form>
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
        </div>
    );
}
export default SignUp;
import { Link } from 'react-router-dom';
import HomeBtn from '../components/HomeBtn';

function LoginPage() {
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
        <span>New here? <Link to="/signup">Sign up!</Link></span>
        <button type="submit">Login</button>
      </form>
      <HomeBtn />
    </div>
  );
}
export default LoginPage;
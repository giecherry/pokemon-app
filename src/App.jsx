import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PokemonApplication from './components/PokemonApplication';
import CollectionPage from './pages/CollectionPage';
import LoginPage from './pages/LoginPage';
import WishlistPage from './pages/WishlistPage';
import SignUp from './pages/SignUp';
import ProtectedRoute from './components/ProtectedRoute';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/browse" element={<PokemonApplication />} />
          <Route path="/mycollection" element={
            <ProtectedRoute>
              <CollectionPage />
            </ProtectedRoute>
          } />
          <Route path="/wishlist" element={
            <ProtectedRoute>
              <WishlistPage />
            </ProtectedRoute>
          } />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PokemonApplication from './components/PokemonApplication';
import CollectionPage from './pages/CollectionPage';
import LoginPage from './pages/LoginPage';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/browse" element={<PokemonApplication />} />
          <Route path="/mycollection" element={<CollectionPage />} />
          <Route path="/LoginPage" element={<LoginPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
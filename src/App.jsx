import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import RingsPage from './pages/RingsPage'
import EarringsPage from './pages/EarringsPage'
import BraceletsPage from './pages/BraceletsPage'
import NecklacesPage from './pages/NecklacesPage'
import AboutPage from './pages/AboutPage'
import ProductPage from './pages/ProductPage'
import LabGrownDiamondsPage from './pages/LabGrownDiamondsPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rings" element={<RingsPage />} />
        <Route path="/earrings" element={<EarringsPage />} />
        <Route path="/bracelets" element={<BraceletsPage />} />
        <Route path="/necklaces" element={<NecklacesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/lab-grown-diamonds" element={<LabGrownDiamondsPage />} />
      </Routes>
    </Router>
  )
}

export default App

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import RingsPage from './pages/RingsPage'
import EarringsPage from './pages/EarringsPage'
import BraceletsPage from './pages/BraceletsPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rings" element={<RingsPage />} />
        <Route path="/earrings" element={<EarringsPage />} />
        <Route path="/bracelets" element={<BraceletsPage />} />
      </Routes>
    </Router>
  )
}

export default App

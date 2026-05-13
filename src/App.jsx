import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import RingsPage from './pages/RingsPage'
import NecklacesPage from './pages/NecklacesPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rings" element={<RingsPage />} />
        <Route path="/necklaces" element={<NecklacesPage />} />
      </Routes>
    </Router>
  )
}

export default App

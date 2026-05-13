import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import RingsPage from './pages/RingsPage'
import EarringsPage from './pages/EarringsPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rings" element={<RingsPage />} />
        <Route path="/earrings" element={<EarringsPage />} />
      </Routes>
    </Router>
  )
}

export default App

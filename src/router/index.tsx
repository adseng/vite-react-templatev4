import Home from '@/views/Home'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<div>about</div>} />
            </Routes>
        </Router>
    )
}

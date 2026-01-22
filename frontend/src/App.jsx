import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StarBackground from './components/StarBackground';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Resume from './pages/Resume';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-space-950 text-star-100 font-sans selection:bg-nebula-purple selection:text-white">
        <StarBackground />
        <Navbar />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
        
      </div>
    </Router>
  );
}

export default App;
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ViewManager from './components/ViewManager';
import { useHardwareCheck } from './hooks/useHardwareCheck';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Publications from './pages/Publications';
import About from './pages/About';
import Resume from './pages/Resume';

function App() {
  useHardwareCheck();

  return (
    <Router>
      <div className="min-h-screen bg-space-950 text-star-100 font-sans selection:bg-nebula-purple selection:text-white">
        <ViewManager>
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/publications" element={<Publications />} />
              <Route path="/about" element={<About />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>
          </main>
        </ViewManager>

      </div>
    </Router>
  );
}

export default App;
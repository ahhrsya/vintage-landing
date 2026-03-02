import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HomeV1 } from './pages/HomeV1';
import { HomeV2 } from './pages/HomeV2';

function App() {
  return (
    <Router>
      <div className="font-sans antialiased bg-dark-primary text-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomeV1 />} />
            <Route path="/v2" element={<HomeV2 />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

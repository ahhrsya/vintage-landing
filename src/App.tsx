import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { HomeV1 } from './pages/HomeV1';
import { HomeV2 } from './pages/HomeV2';
import { HomeV3 } from './pages/HomeV3';

const AppContent = () => {
  const location = useLocation();
  const showDefaultNavbar = location.pathname !== '/v3';

  return (
    <div className="font-sans antialiased bg-dark-primary text-white">
      {showDefaultNavbar && <Navbar />}
      <main>
        <Routes>
          <Route path="/" element={<HomeV1 />} />
          <Route path="/v2" element={<HomeV2 />} />
          <Route path="/v3" element={<HomeV3 />} />
        </Routes>
      </main>
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;

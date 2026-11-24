import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import { teamsConfig } from './data/teamsConfig';

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            {teamsConfig.map((team) => {
              const TeamComponent = team.component;
              return (
                <Route
                  key={team.id}
                  path={`/equipe/${team.slug}`}
                  element={<TeamComponent />}
                />
              );
            })}
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
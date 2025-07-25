import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/landingPage';
import RegisterPage from './pages/register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<RegisterPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React, { useEffect } from 'react';
import Navbar from './components/Layout/Navbar';
import MainSearch from './components/Main/MainSearch';
import Wrapper from './components/Static/Wrapper';
import Sidebar from './components/Layout/Sidebar';
import Footer from './components/Layout/Footer/Footer';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Findings from './components/Findings/Findings';
import { useContext } from 'react';
import { APIContext } from './context/APIContext';
import LandingPage from './components/Layout/Landing/LandingPage';
const App = () => {
  const { results } = useContext(APIContext);
  const navigate = useNavigate();

  // use effect
  useEffect(() => {
    if (results && results.length > 0) {
      navigate('/findings');
    }
  }, [navigate, results]);

  return (
    <>
      <Sidebar />
      <Wrapper>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/findings" element={<Findings />} />
        </Routes>
      </Wrapper>
    </>
  )
}

export default App;

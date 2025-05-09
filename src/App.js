import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import useMediaQuery from './hooks/useMediaQuery';
import NotMobile from './components/NotMobile';
import { useEffect } from 'react';

function App() {

  const isMobile = useMediaQuery('(max-width: 768px)');
    useEffect(() => {
  }, [isMobile]);

  if (!isMobile) {
    return <NotMobile />;
  }

  return (
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
      </Routes>
  );
}

export default App;

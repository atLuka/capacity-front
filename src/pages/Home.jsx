// Home.js - Version améliorée avec hook personnalisé
import React from 'react';
import HomeMobile from '../components/HomeMobile';
import HomeWeb from '../components/HomeWeb';
import useMediaQuery from '../hooks/useMediaQuery';

const Home = () => {
  // Utilisation du hook personnalisé pour détecter si l'écran est de taille desktop
  const isDesktop = useMediaQuery('(min-width: 768px)');

  // Rendu conditionnel basé sur la taille de l'écran
  return isDesktop ? <HomeWeb /> : <HomeMobile />;
};

export default Home;
// hooks/useMediaQuery.js
import { useState, useEffect } from 'react';

/**
 * Hook personnalisé pour détecter si une media query est satisfaite
 * @param {string} query - La media query à vérifier (ex: '(min-width: 768px)')
 * @returns {boolean} - true si la media query est satisfaite, false sinon
 */

const useMediaQuery = (query) => {
  // État initial basé sur la correspondance actuelle
  const [matches, setMatches] = useState(
    () => window.matchMedia(query).matches
  );

  // Mettre à jour l'état lorsque la correspondance change
  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    
    // Définir le gestionnaire d'événements
    const handleChange = (event) => {
      setMatches(event.matches);
    };

    // Ajouter le gestionnaire
    if (mediaQuery.addEventListener) {
      // Nouvelle API
      mediaQuery.addEventListener('change', handleChange);
    } 
    
    // S'assurer que l'état est correctement défini initialement
    setMatches(mediaQuery.matches);

    // Nettoyage
    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleChange);
      }
    };
  }, [query]);

  return matches;
};

export default useMediaQuery;
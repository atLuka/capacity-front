import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';



const HomeMobile = () => {
  const [imageHeight, setImageHeight] = useState(0);
  const textSectionRef = useRef(null);
  
  // Fonction pour calculer la hauteur optimale de l'image pour remplir tout l'espace disponible
  const calculateImageHeight = () => {
    // Obtenir la hauteur totale de l'écran
    const viewportHeight = window.innerHeight;
    
    // Obtenir la hauteur exacte du contenu texte
    const textSectionHeight = textSectionRef.current ? textSectionRef.current.clientHeight : 280;
    
    // Espacement minimal
    const minSpacing = 24;
    
    // Calculer l'espace disponible pour l'image (tout l'espace restant)
    const availableHeight = viewportHeight - textSectionHeight - minSpacing;
    
    // Définir une hauteur minimale pour l'image
    const minImageHeight = 120;
    
    // Utiliser la hauteur disponible, mais pas moins que la hauteur minimale
    return Math.max(availableHeight, minImageHeight);
  };
  
  // Mettre à jour la hauteur de l'image lorsque la taille de l'écran change
  useEffect(() => {
    const handleResize = () => {
      // Petit délai pour s'assurer que les refs sont à jour
      setTimeout(() => {
        setImageHeight(calculateImageHeight());
      }, 10);
    };
    
    // Calculer la hauteur initiale
    handleResize();
    
    // Ajouter un écouteur d'événement pour les changements de taille
    window.addEventListener('resize', handleResize);
    
    // Nettoyer l'écouteur d'événement
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navigate = useNavigate();
  
  return (
    <div className="h-screen flex flex-col bg-black text-white">
      <main className="flex flex-col h-full px-6 py-4">
        {/* Image avec hauteur dynamique - qui remplit l'espace disponible */}
        <div className="w-full flex-grow">
          <div className="h-full rounded-lg overflow-hidden shadow-md">
            <img 
              src={process.env.PUBLIC_URL + '/assets/img/test-glove.jpg'} 
              alt="Boxing Gloves" 
              className="w-full h-full filter grayscale contrast-110 brightness-105 object-cover"
              style={{ height: `${imageHeight}px` }}
            />
          </div>
        </div>
        
        {/* Contenu du bas (titre, texte, bouton et lien) groupés */}
        <div ref={textSectionRef} className="flex flex-col mt-3">
          {/* Texte */}
          <div className="mb-4">
            <h1 className="text-4xl font-light mb-2 leading-tight">
              Entraînez-vous.<br />
              Progressez.<br />
              Ensemble.
            </h1>
            
            <p className="text-gray-400 text-sm mt-2">
              Gérez vos cours de sport, suivez votre évolution et<br />
              rejoignez votre communauté, où que vous soyez.
            </p>
          </div>
          
          {/* Bouton */}
          <div>
            <button className="flex items-center justify-between w-full bg-black text-white border border-gray-700 rounded-full py-3 px-5 hover:border-gray-500 transition-colors">
              <span className="font-medium">Commencer l'expérience</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          
        </div>
      </main>
    </div>
  );
};

export default HomeMobile;
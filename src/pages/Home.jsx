import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';



const Home = () => {
  
  const [imageHeight, setImageHeight] = useState(0);
  const textSectionRef = useRef(null);
  
  const calculateImageHeight = () => {
    const viewportHeight = window.innerHeight;
    const textSectionHeight = textSectionRef.current ? textSectionRef.current.clientHeight : 280;
    const minSpacing = 24;
    const availableHeight = viewportHeight - textSectionHeight - minSpacing;
    const minImageHeight = 120;
    return Math.max(availableHeight, minImageHeight);
  };
  
  useEffect(() => {
    const handleResize = () => {
      setTimeout(() => {
        setImageHeight(calculateImageHeight());
      }, 2);
    };
    
    handleResize();
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navigate = useNavigate();
  
  return (
    <div className="h-screen flex flex-col bg-black text-white">
      <main className="flex flex-col h-full px-6 py-4">

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
        
        <div ref={textSectionRef} className="flex flex-col mt-3">

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
          
          <div>
            <button className="flex items-center justify-between w-full bg-black text-white border border-gray-700 rounded-full py-3 px-5 hover:border-gray-500 transition-colors" onClick={() => navigate('/login')}>
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

export default Home;
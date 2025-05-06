// HomeWeb.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomeWeb = () => {
  return (
    <div className="h-screen flex flex-col bg-black text-white overflow-hidden">
      <nav className="flex justify-between items-center px-16 py-4 h-16">
        <div className="text-xl">CAPACITY</div>
      </nav>

      <main className="flex flex-row items-center justify-center px-16 flex-grow">
        <div className="w-1/2 pr-8 h-full flex items-center">
          <div className="rounded-md overflow-hidden shadow-md w-full">
            <img 
              src={process.env.PUBLIC_URL + '/assets/img/test-glove.jpg'} 
              alt="Boxing Gloves" 
              className="w-full h-auto filter grayscale contrast-110 brightness-105 object-cover"
              style={{ maxHeight: 'calc(100vh - 10rem)' }} // Hauteur dynamique qui s'adapte à l'écran
            />
          </div>
        </div>
        
        <div className="w-1/2 pl-8 pr-12 lg:pr-24 h-full flex flex-col justify-center">
          <div className="mb-8">
            <h1 className="text-4xl lg:text-5xl font-light mb-4 leading-tight">
              Entraînez-vous.<br />
              Progressez.<br />
              Ensemble.
            </h1>
            <p className="text-gray-400 text-base mt-4">
              Gérez vos cours de sport, suivez votre évolution et
              rejoignez votre communauté, où que vous soyez.
            </p>
          </div>
          
          <div>
            <button className="flex items-center justify-between w-auto px-10 bg-black text-white border border-gray-700 rounded-full py-3 hover:border-gray-500 transition-colors">
              <span className="font-medium">Commencer l'expérience</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            
            
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomeWeb;
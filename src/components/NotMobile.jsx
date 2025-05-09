import React from "react";

const NotMobile = () => {

    return (
        <div className="not-mobile-container h-screen flex flex-col items-center justify-center bg-black text-white p-6">
          <div className="not-mobile-content text-center max-w-md">
            <h1 className="not-mobile-title text-3xl font-light mb-4">CAPACITY</h1>
            <div className="not-mobile-divider w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="not-mobile-message text-xl mb-4">
              Cette application est optimisée pour les appareils mobiles.
            </p>
            <p className="not-mobile-instruction text-gray-400">
              Veuillez accéder à Capacity depuis votre smartphone ou tablette pour une expérience optimale.
            </p>
          </div>
        </div>
      );
}

export default NotMobile;
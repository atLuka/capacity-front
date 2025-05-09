import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';


const Login = () => {

  const [userNumber,setUserNumber] = useState('');
  const [password,setPassword] = useState('');
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    if (name === 'userNumber') {
      setUserNumber(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  }

  const handleLogin = (e) => {
    e.preventDefault();
    if(userNumber == "000" && password == "root")
      {
        setShowError(false);
        navigate('/home');
      }
    else
      { 
        setShowError(true);
      }
  }
  
  return (
    
    <div className="login-mobile-container h-screen flex flex-col">

      <div className="login-header-container flex flex-col items-center justify-center h-3/5 w-full  text-white p-4 overflow-auto">
        <h1 className="text-xl text-center text-white mb-6 ">CAPACITY.</h1>
        <img src='../assets/img/silhouette.svg'  alt="Logo" /> 
      </div>
      
      <div className="login-form-container flex flex-col items-center h-2/5 w-full text-white p-6">

        <h2 className="text-2xl text-black  mb-2">Connexion</h2>
        <form className="w-full mt-8 max-w-md" onSubmit={handleLogin}>
          <div className="mb-6">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center  pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="gray" d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2S7.5 4.019 7.5 6.5M20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1z"/></svg>
              </div>
              <input
                type="userNumber"
                id="userNumber"
                onChange={handleInputChange}
                value={userNumber}
                name='userNumber'
                className="w-full pl-7 px-4 py-2 text-black login-borderless-input focus:outline-none focus:ring focus:ring-blue-500"
                placeholder="Entrez votre N° d'adhérent"
              />
            </div>
          </div>
          <div className="mb-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center  pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </div>
              <input
                type="password"
                id="password"
                onChange={handleInputChange}
                value={password}
                name='password'
                className="w-full pl-7 px-4 py-2 text-black login-borderless-input focus:outline-none focus:ring focus:ring-blue-500"
                placeholder="Entrez votre mot de passe"
              />
            </div>
          </div>

          <div className={`text-red-500 text-sm ${showError ? "" : "invisible"}`}>
            Identifiant ou mot de passe incorrect
          </div>
      
          <div className='mt-7 w-full'>
          <button className="flex items-center w-full bg-black text-white justify-center border border-gray-700 rounded-full py-3 px-5 hover:border-gray-500 transition-colors">
              <span className="font-medium">Se connecter</span>
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};

export default Login;
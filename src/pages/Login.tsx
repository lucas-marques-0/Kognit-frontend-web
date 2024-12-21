import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    setErrorMessage('')

    if (!username.trim() || !password.trim()) {
      setErrorMessage('Por favor, digite tanto o nome de usuário quanto a senha para continuar.');
      return; 
    }

    localStorage.setItem('username', username.trim());

    const loginData = {
      Username: username.trim(),
      Password: password.trim(),
    };
    console.log('Simulando organização dos dados para o backend:', loginData);

    navigate('/home');
  };

  return (
    <div className='login-container'>
      <img style={{ width: '200px'}} src='/kognit-logo.png' alt="Logo da Kognit" />
      <input
        className='login-input'
        type="text"
        placeholder="Digite seu nome de usuário"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className='login-input'
        type="password"
        placeholder="Digite sua senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <button className='login-button' onClick={handleLogin}>Login!</button>
    </div>
  );
};

export default Login;

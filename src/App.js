import React, { useState } from 'react';
import './App.css';

function App() {
  // Estado para los campos del formulario
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  // Estado para mostrar errores
  const [error, setError] = useState('');

  // Manejar cambios en los inputs
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación simple: verificar que los campos no estén vacíos
    if (!formData.email || !formData.password) {
      setError('Por favor, completa todos los campos');
    } else {
      setError('');
      // Aquí podrías enviar la información a una API para autenticar
      console.log('Datos enviados:', formData);
    }
  };

  return (
    <div className="login-container">
      <div className="left-section">
        <div className="logo">
          {/* Logo */}
        </div>
        <p  id='parrafo'>Optimiza decisiones con datos procesados al instante.</p>
      </div>
      <div className="right-section">
        <div className="form-container">
          <h2>Logo</h2>
          <p>Inicia sesión con Formica</p>
          {error && <p className="error">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Usuario</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="usuario@correo.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Contraseña"
              />
            </div>
            <button type="submit" className="btn-login">Iniciar sesión</button>
          </form>
        </div>
      </div>
      
    </div>
    
  );
}

export default App;

import React, { useState } from 'react';
import RegistroForm from './components/RegistroForm';

const App = () => {
  const [mostrarRegistro, setMostrarRegistro] = useState(false);
  const [mostrarMensajeRegistro, setMostrarMensajeRegistro] = useState(false);

  const handleRegistroExitoso = () => {
    setMostrarMensajeRegistro(true);

    
    setTimeout(() => {
      setMostrarRegistro(false);
    }, 3000);
  };
 
  const handleMostrarMensajeRegistro = (mostrar) => {
    setMostrarMensajeRegistro(mostrar);
  };

  return (
    <div className='pagina-inicio'>
      {mostrarRegistro ? null : <h1>Página de Inicio</h1>}
      {mostrarRegistro ? (
        <RegistroForm
          onRegistroExitoso={handleRegistroExitoso}
          onMostrarMensajeRegistro={handleMostrarMensajeRegistro}
        />
      ) : (
        <div>
          <p>Bienvenido a la página de inicio</p>
          <button onClick={() => setMostrarRegistro(true)}>Registrarme</button>
        </div>
      )}
      {mostrarMensajeRegistro && (
        <div>
          <p>Gracias por registrarte 😊</p>
        </div>
      )}
    </div>
  );
};

export default App;

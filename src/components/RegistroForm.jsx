import React, { useState } from 'react';
import './RegistroForm.css';
import { IoMdSunny, IoMdMoon } from 'react-icons/io';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const RegistroForm = ({ onRegistroExitoso }) => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [password, setPassword] = useState('');
  const [confirmarPassword, setConfirmarPassword] = useState('');
  const [modoOscuro, setModoOscuro] = useState(false);
  const [mensajeAlerta, setMensajeAlerta] = useState(null);
  const [errores, setErrores] = useState({});
  const [fondoRegistroExitoso, setFondoRegistroExitoso] = useState(false);

  const toggleModo = () => {
    setModoOscuro(!modoOscuro);
  };

  
  const validarRegistro = () => {
    const nuevosErrores = {};

    if (!nombre.trim()) {
      nuevosErrores.nombre = 'El nombre es requerido';
    }

    if (!apellido.trim()) {
      nuevosErrores.apellido = 'El apellido es requerido';
    }

    if (!email.trim()) {
      nuevosErrores.email = 'El email es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nuevosErrores.email = 'El formato del email no es válido';
    }

    if (!telefono.trim()) {
      nuevosErrores.telefono = 'El teléfono es requerido';
    } else if (!/^\d{10}$/.test(telefono)) {
      nuevosErrores.telefono = 'El teléfono debe tener 10 dígitos';
    }

    if (!password.trim()) {
      nuevosErrores.password = 'La contraseña es requerida';
    } else if (password.length < 6) {
      nuevosErrores.password = 'La contraseña debe tener al menos 6 caracteres';
    }

    if (!confirmarPassword.trim()) {
      nuevosErrores.confirmarPassword = 'Por favor, confirma la contraseña';
    } else if (confirmarPassword !== password) {
      nuevosErrores.confirmarPassword = 'Las contraseñas no coinciden';
    }

    setErrores(nuevosErrores);

    // Si no hay errores, devuelve true; de lo contrario, devuelve false
    return Object.keys(nuevosErrores).length === 0;
  };


  const handleRegistrarseClick = (e) => {
    e.preventDefault();
    const esValido = validarRegistro();

    if (esValido) {
      console.log('registrado')
      // toast.success('Te has registrado exitosamente.');
      setMensajeAlerta({ mensaje: 'Te has registrado exitosamente.', tipo: 'success' });
      onRegistroExitoso();
      setFondoRegistroExitoso(true);
    }
  };

  return (
    <div className={`container ${modoOscuro ? 'modo-oscuro' : ''} ${fondoRegistroExitoso ? 'fondo-registro-exitoso' : ''}`}>
      <button className="modo-btn" onClick={toggleModo}>
        {modoOscuro ? <IoMdSunny /> : <IoMdMoon />}
      </button>
      {mensajeAlerta && (
        <div className={`alerta ${mensajeAlerta.tipo}`}>
          <p>{mensajeAlerta.mensaje}</p>
        </div>
      )}
      <h2>Formulario de Registro</h2>
        <form onSubmit={handleRegistrarseClick}>
          <div className="form-input">
            <label className="label-color">Nombre:</label>
            <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
            {errores.nombre && <p className="error-message">{errores.nombre}</p>}
          </div>

          <div className="form-input">
            <label className="label-color">Apellido:</label>
            <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
            {errores.apellido && <p className="error-message">{errores.apellido}</p>}
          </div>

          <div className="form-input">
            <label className="label-color">Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            {errores.email && <p className="error-message">{errores.email}</p>}
          </div>

          <div className="form-input">
            <label className="label-color">Teléfono:</label>
            <input type="tel" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
            {errores.telefono && <p className="error-message">{errores.telefono}</p>}
          </div>

          <div className="form-input">
            <label className="label-color">Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            {errores.password && <p className="error-message">{errores.password}</p>}
          </div>

          <div className="form-input">
            <label className="label-color">Confirmar Password:</label>
            <input
              type="password"
              value={confirmarPassword}
              onChange={(e) => setConfirmarPassword(e.target.value)}
            />
            {errores.confirmarPassword && <p className="error-message">{errores.confirmarPassword}</p>}
          </div>

          <button type="submit">Registrarse</button>
        </form>
    </div>
  );
};

export default RegistroForm;

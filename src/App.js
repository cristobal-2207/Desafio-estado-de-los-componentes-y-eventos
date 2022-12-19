import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import Input from './components/Input'
import Button  from './components/Button';

function App() {
  const [nombre, setNombre] = useState("");
  const [contraseña, setContraseña] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nombre.trim() || !contraseña.trim()) {
      alert(`Ingrese su nombre y contraseña, no puede quedar vacío`);
      return;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input setNombre={setNombre} setContraseña={setContraseña} />
      <Button />
    </form>
  );
}

export default App;
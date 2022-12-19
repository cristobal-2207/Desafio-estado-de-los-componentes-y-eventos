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
      <h1>Desafio Estado de los componentes y eventos</h1>
      <Input setNombre={setNombre} setContraseña={setContraseña} />
      {contraseña === "252525" ? <Button /> : null}
    </form>
  );
}

export default App;
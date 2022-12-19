import Button from "./Button";

const Input = ({setNombre, setContraseña}) => {
  return (
    <>
      <label htmlFor="nombre">Nombre</label>
      <input type="text" name="nombre" placeholder="Ingrese su nombre de usuario" className="form-control" onChange={(e) => setNombre(e.target.value)} />
      
      <label htmlFor="contraseña">Contraseña</label>
      <input type="text" name="contraseña" placeholder="Ingrese su contraseña" className="form-control" onChange={(e) => setContraseña(e.target.value)} />
    </>
  );
};

export default Input
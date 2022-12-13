const Input = () => {
  return (
    <form>
      <div className="form-group">
        <label>Nombre</label>
        <input className="form-control" name="Nombre" placeholder="Ingresa tu nombre" />
        <label>Contraseña</label>
        <input className="form-control" name="Constraseña" placeholder="Ingresa tu contraseña"/>
      </div>
    </form>
    )
  }

  export default Input
import React, { Component } from 'react';

class FormularioRegistro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: '',
      email: '',
      contraseña: '',
      género: 'masculino',
      aceptarTerminos: false,
    };
  }

  // Manejar cambios en los campos del formulario
  handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;

    this.setState({
      [name]: newValue,
    });
  };

  // Manejar el envío del formulario
  handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar lógica para enviar los datos del formulario al servidor
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <h2>Formulario de Registro</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={this.state.nombre}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="contraseña">Contraseña:</label>
            <input
              type="password"
              id="contraseña"
              name="contraseña"
              value={this.state.contraseña}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label>Género:</label>
            <select
              name="género"
              value={this.state.género}
              onChange={this.handleChange}
            >
              <option value="masculino">Masculino</option>
              <option value="femenino">Femenino</option>
              <option value="otro">Otro</option>
            </select>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                name="aceptarTerminos"
                checked={this.state.aceptarTerminos}
                onChange={this.handleChange}
              />
              Acepto los términos y condiciones
            </label>
          </div>
          <button type="submit">Registrarse</button>
        </form>
      </div>
    );
  }
}

export default FormularioRegistro;

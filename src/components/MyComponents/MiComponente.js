import React from "react";
import template from "./MiComponente.js";
import { withRouter } from 'react-router-dom';

class MiComponente extends React.Component {
  // Otro método personalizado
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
  }
  login() {
    console.log('Este es un método personalizado');
    
    // Redirigir a la ruta /table
    this.props.history.push('/table');
  }
 
  render() {
    return template.call(this);
  }
}

// Envolver MiComponente con withRouter para tener acceso a this.props.history
export default withRouter(MiComponente);

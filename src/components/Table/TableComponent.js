import React    from "react";
import template from "./TableComponent.js";
import { withRouter } from 'react-router-dom';
class TableComponent extends React.Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
  }
  login() {
    console.log('Este es un método personalizado');
    
    // Redirigir a la ruta /table
    this.props.history.push('/');
  }
  render() {
    return template.call(this);
  }
}

export default withRouter(TableComponent);

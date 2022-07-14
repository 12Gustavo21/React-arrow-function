import React, { Component } from "react";

class App extends Component {
  // ARROW FUNCTION: () => {}

  mensagem = () => {
    return <h1>UwU</h1>;
  };

  dobro = (numero) => {
    return <h2>O dobro é: {numero * 2}</h2>;
  };

  render() {
    return this.mensagem();
  }
}
export default App;

import React, { Component } from "react";

class App extends Component {
  // ARROW FUNCTION: () => {}

  mensagem = () => {
    return <h2>Mensagem pela função</h2>;
  };

  escolhaMensagem = (msg) => {
    return <h2>{msg}</h2>;
  };
}
export default App;

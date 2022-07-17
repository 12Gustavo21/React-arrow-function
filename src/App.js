import React, { Component } from "react";
import "./styles.css";

class App extends Component {
  msg = () => {
    return <h1>UwU</h1>;
  };

  dobro = (num) => {
    return <h2>O dobro é: {num * 2}</h2>;
  };

  render() {
    return (
      <section>
        <h1>{this.msg()}</h1>
        <h2>{this.dobro(2)}</h2>
      </section>
    );
  }
}
export default App;

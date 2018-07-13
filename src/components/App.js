import React, { Component } from 'react';
import Hello from './Hi';
import Name from './NameField';

class App extends Component {
  render() {
    return (
      <div className="App container">
        
        <Hello name="Dico" />

        <Name placeholder="Digite seu nome aqui" onChange={this.mudaNome} />

      </div>
    );
  }
}

export default App;

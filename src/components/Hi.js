import React, { Component } from 'react';
import NameList from './NameList';

export default class Hello extends Component {

    constructor(props) {
        super();

        this.state = {
            name: "Nome Padrão",
            placeholder: "Seu nome aqui, ex: Fulano",
            names: ["nome teste", "outro teste", "mais um teste"],
        }

        this.digitado = [...this.state.names];

        this.novoNome = "";

    }

    mudaNome(e) {
        this.setState({
            name: e.target.value
        });

        this.novoNome = e.target.value;
        
    }
    
    adicionaNome(e) {
        e.preventDefault();

        this.digitado.push(this.novoNome);

        this.setState({
            names: this.digitado
        });

        this.refs.campoValue.value = '' ;

    }

    render() {

        const namesList = this.digitado.map( (name, key) => <li key={key}>{name}</li> );

        return (
            <React.Fragment>
                <p id="hello-field" className="h1 text-center py-3 bg-light">Hello {this.state.name}!</p>

                <NameList {...this.state} namesList={namesList} />

                <form onSubmit={this.adicionaNome.bind(this)}>
                    <div className="form-group">

                        <input ref="campoValue" type="text" placeholder={this.state.placeholder}
                            className="form-control w-50 text-center mx-auto my-4" 
                            onChange={this.mudaNome.bind(this)}
                        />

                    </div>
                </form>
            </React.Fragment>
        );
    }

}
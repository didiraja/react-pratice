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

    }

    mudaNome(e) {
        this.setState({
            name: e.target.value
        });
    }
    
    trocaNome(e) {
        // this.setState({
        //     name: e.target.value
        // });
    }

    render() {

        const namesMap = this.state.names;
        const namesList = namesMap.map( (name, key) => <li key={key}>{name}</li> );

        return (
            <React.Fragment>
                <p id="hello-field" className="h1 text-center py-3 bg-light">Hello {this.state.name}!</p>

                <NameList {...this.state} namesList={namesList} />

                <input
                    id="campo-value" type="text" placeholder={this.state.placeholder}
                    className="form-control w-50 text-center mx-auto my-4" 
                    onChange={this.mudaNome.bind(this)} onSubmit={this.trocaNome.bind(this)}
                />
            </React.Fragment>
        );
    }

}
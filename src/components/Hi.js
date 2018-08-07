import React, { Component } from 'react';

export default class Hello extends Component {

    constructor(props) {
        super();

        this.state = {
            name: "Nome Padrão",
            placeholder: "Seu nome aqui, ex: Fulano"
        }

    }

    mudaNome(e) {
        this.setState({
            name: e.target.value
        });
    }

    render() {

        return (
            <React.Fragment>
                <p id="hello-field" className="h1 text-center py-3 bg-light">Hello {this.state.name}!</p>

                <p className="text-center pt-3">Digite seu nome nome e pressione Enter</p>

                <input id="campo-value" type="text" className="form-control w-50 text-center mx-auto my-4" placeholder={this.state.placeholder} onKeyUp={this.mudaNome.bind(this)} />
            </React.Fragment>
        );
    }

}
import React, { Component } from 'react';

export default class Hello extends Component {

    constructor() {
        super();

        this.state = {
            name: "Nome Padrão",
            placeholder: "Digite seu nome aqui"
        }

    }

    mudaNome(e) {
        console.log(e);
    }

    render() {

        return (
            <React.Fragment>
                <p id="hello-field" className="h1 text-center py-3 bg-light">Hello {this.state.name}!</p>

                <input id="campo-value" type="text" className="form-control w-50 text-center mx-auto my-4" placeholder={this.state.placeholder} onKeyDown={this.mudaNome} />
            </React.Fragment>
        );
    }

}
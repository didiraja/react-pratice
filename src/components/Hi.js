import React, { Component } from 'react';

export default class Hello extends Component {

    constructor() {
        super();
        this.state = {
            nome: 'Nome padrão'
        }
    }

    render() {

        return (
            <p id="hello-field" className="h1 text-center py-3 bg-light">Hello {this.state.nome}!</p>
        );
    }

}
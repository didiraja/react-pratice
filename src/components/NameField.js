import React, { Component } from 'react';

export default class Name extends Component {

    constructor() {
        super();
        this.mudaNome = this.mudaNome.bind(this);
    }

    mudaNome(e) {
        console.log(e);
        
        this.setState({ nome: this.target.value });
    } 

    render() {

        return (
            <input id="campo-value" type="text" className="form-control w-50 text-center mx-auto my-4" placeholder={this.props.placeholder} />
        );
    }

}
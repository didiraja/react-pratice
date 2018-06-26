import React, { Component } from 'react';

export default class Name extends Component {

    constructor() {
        super();
    }

    MudaNome() {
        return this.setState({
            document.querySelector("#hello-field").value = document.querySelector("#campo-value").value;
        });
    } 

    render() {

        return (
            <input id="campo-value" type="text" className="form-control w-50 text-center mx-auto my-4" placeholder={this.props.placeholder} />
        );
    }

}
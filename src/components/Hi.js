import React, { Component } from 'react';

export default class Hello extends Component {

    render() {

        return (
            <p id="hello-field" className="h1 text-center py-3 bg-light">Hello {this.props.name}!</p>
        );
    }

}
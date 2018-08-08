import React, { Component } from 'react';

export default class NameList extends Component {

    constructor(props) {
        super();
    }

    render() {

        return (
            <React.Fragment>

                <p className="text-center pt-3">Digite seu nome nome e pressione Enter</p>

                <ul className="w-25 mx-auto">
                    <li>nome teste</li>
                </ul>

            </React.Fragment>
        );
    }

}
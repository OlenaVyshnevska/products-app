import React, { Component } from 'react';
import {Collapse} from '@blueprintjs/core';

class Prod extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(
            {
                isOpen: !this.state.isOpen
            }
        );
    }

    render() {
        return(
            <div className="item">
                <h2>{this.props.product.name}</h2>
                <h4>{this.props.product.price.toLocaleString("en-US", {style: "currency", currency: "USD"})}</h4>
                <button className="btn-desc" intent="success" onClick={this.handleClick} icon="download">
                    {this.state.isOpen ? "Hide" : "Show"} Description
                </button>
                <Collapse isOpen={this.state.isOpen}>
                    <p>
                        {this.props.product.description}
                    </p>
                </Collapse>
                <br />
            </div>
        );
    }
}

export default Prod;

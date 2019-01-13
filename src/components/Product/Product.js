import React, { Component } from 'react';
import {Button, Collapse} from '@blueprintjs/core';

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
                Name: {this.props.product.name}
                <br />
                Price: {this.props.product.price.toLocaleString("en-US", {style: "currency", currency: "USD"})}
                <br />
                <Button intent="success" onClick={this.handleClick} icon="key">
                    {this.state.isOpen ? "Hide" : "Show"} Description
                </Button>
                <Collapse isOpen={this.state.isOpen}> 
                    <pre>
                        Description: {this.props.product.description}
                    </pre>
                </Collapse>
                <br />
            </div>
        );
    }
}

export default Prod;
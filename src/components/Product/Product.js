import React, { Component } from 'react';
import { Button, Collapse } from '@blueprintjs/core';

class Prod extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            buttonStyle: "download"
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState =>
            { 
                return {
                    isOpen: !this.state.isOpen,
                    buttonStyle: prevState.buttonStyle === "download" ? "upload" : "download"
                };
            }
        );
    }

    render() {
        return(
            <div className="item">
                <h2>{this.props.product.name}</h2>
                <h4>{this.props.product.price.toLocaleString("en-US", {style: "currency", currency: "USD"})}</h4>
                <Button className="btn-desc" intent="success" onClick={this.handleClick} icon={this.state.buttonStyle}>
                    {this.state.isOpen ? "Hide" : "Show"} Description
                </Button>
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

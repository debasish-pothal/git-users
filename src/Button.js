import React, { Component } from 'react';

class Button extends Component {
    handleClick = () => {
        this.props.onHandleClick(this.props.incrementValue)
    }

    render() {
        return(
            <button className="btn btn-primary" onClick={ () => this.handleClick() }>+ { this.props.incrementValue }</button>
        );
    }
}

export default Button;
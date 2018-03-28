import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super();

        this.state = {
            userName: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch(`https://api.github.com/users/${this.state.userName}`)
        .then(response => response.json())
        .then(data => this.props.onSubmit(data));
    }

    render() {
        return (
            <form className="form-inline" onSubmit={this.handleSubmit} style={{marginBottom: 20}}>
              <div className="form-group">
                <input className="form-control" id="user" placeholder="User Name" name="user" type="text" 
                value={ this.state.userName }
                onChange={ (event) => this.setState({ userName: event.target.value }) } />
              </div>
              <button type="submit" className="btn btn-primary">Add User</button>
            </form>
        );
    }
}

export default Form;
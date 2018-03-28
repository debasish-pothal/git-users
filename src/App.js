import React, { Component } from 'react';

import Button from './Button';
import Result from './Result';
import CardList from './CardList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        counter: 0
    }
  }

  handleClick = (incrementBy) => {
      this.setState((prevState) => ({
          counter: prevState.counter + incrementBy
      }));
  }

  render() {
    return (
      <div className="container" style={{marginTop: 20}}>
        {/* <div className="row">
          <div className="col-md-12">
            <div class="btn-group">
              <Button incrementValue={1} onHandleClick={ this.handleClick } />
              <Button incrementValue={3} onHandleClick={ this.handleClick } />
              <Button incrementValue={5} onHandleClick={ this.handleClick } />
            </div>
          </div>
          <Result counter={this.state.counter} />
    </div> */}
        <div className="row">
          <div className="col-md-12">
            <CardList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

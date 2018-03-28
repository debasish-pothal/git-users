import React, { Component } from 'react';

import Button from './Button';
import Result from './Result';
import CardList from './CardList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [
        {
          userImage: 'https://avatars3.githubusercontent.com/u/8099723?v=4',
          userName: 'Debasish Pothal',
          userAddress: 'Bangalore, India'
        },
        {
          userImage: 'https://avatars3.githubusercontent.com/u/6412038?v=4',
          userName: 'React Community',
          userAddress: 'Everywhere'
        }
      ]
    }
  }

  render() {
    return (
      <div className="container" style={{marginTop: 20}}>
        <div className="row">
          <div className="col-md-12">
            <CardList cards={this.state.cards}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';

import CardList from './CardList';
import Form from './Form';


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

  addNewCard = (cardInfo) => {
    this.setState(prevState => ({
      cards: prevState.cards.concat({
        userImage: cardInfo.avatar_url,
        userName: cardInfo.name,
        userAddress: cardInfo.location
      })
    }));
  }

  render() {
    return (
      <div className="container" style={{marginTop: 20}}>
        <div className="row">
          <div className="col-md-12">
            <Form onSubmit={this.addNewCard} />
          </div>
        </div>
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

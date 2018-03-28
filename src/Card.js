import React from 'react';

const Card = (props) => {
    return (
        <div className="card" style={{width: 200, marginBottom: 10}}>
          <img className="card-img-top" src={props.userImage} alt="Card image" />
          <div className="card-body">
            <h4 className="card-title">{props.userName}</h4>
            <p className="card-text">{props.userAddress}</p>
          </div>
        </div>
    );
}

export default Card;
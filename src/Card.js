import React from 'react';

const Card = (props) => {
    return (
        <div className="card" style={{width: 300}}>
          <img className="card-img-top" src="http://via.placeholder.com/300x200" alt="Card image" />
          <div className="card-body">
            <h4 className="card-title">John Doe</h4>
            <p className="card-text">Some example text.</p>
          </div>
        </div>
    );
}

export default Card;
import React from 'react';

import Card from './Card';

const CardList = (props) => {
    return(
        <div className="row">
            { props.cards.map(card => <div className="col-md-3"><Card {...card} /></div>) }
        </div>
    );
}

export default CardList;
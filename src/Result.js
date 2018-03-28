import React from 'react';

const Result = (props) => {
    return(
        <div className="col-md-12"  style={{marginTop: 20}}>
            <h3>{props.counter}</h3>
        </div>
    );
}

export default Result;
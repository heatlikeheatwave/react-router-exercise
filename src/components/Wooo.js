import React from 'react';

const Wooo = (props) => {
    console.log(props);
    return(
        <div>{props.match.params.bookTitle} written by {props.match.params.author}</div>
    )
}

export default Wooo;
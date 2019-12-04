import React, { Component } from 'react';

class Quiz extends Component {
    render(props) {
        return (
            <>
            <h1>Quiz Project Page</h1>
            <p>Link to <a href={this.props.repoLink}>Github Repo</a></p>
            </>
        )
    }
}

export default Quiz;
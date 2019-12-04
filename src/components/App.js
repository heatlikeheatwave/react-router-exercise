import React, { Component } from 'react';
import '../App.css';
import Header from './Header';

class App extends Component {
    constructor() {
        super();
        this.state = {
            phoneNumber: '416-967-1111'
        }
    }
    render() {
        return (
            <Header contactNumber={this.state.phoneNumber}/>
        );
    }
}

export default App;

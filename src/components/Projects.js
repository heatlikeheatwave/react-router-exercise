import React, { Component, Fragment } from 'react';
import { Route, Link } from 'react-router-dom';
import Quiz from './Quiz';

class Projects extends Component {
    constructor() {
        super();
        this.state = {
            repoLink: 'https"//heathergh.github.io/heather-hamilton-project-three'
        }
    }
    render() {
        const repoLink = () => {
            return(
                <Quiz repoLink={this.state.repoLink} /> 
            )
        };

        return (
            <Fragment>
                <h1>Projects Page</h1>
                <Link to="/projects/quiz">Link to Quiz Project</Link>
                <Route exact path="/projects/quiz" component={Quiz} render=
                { 
                    // () => {
                    // return(
                    //     <Quiz repoLink={this.state.repoLink} /> 
                    // )}
                    
                    // or
                    repoLink
                } />
            </Fragment>
        )
    }
}
export default Projects;
import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import Wooo from './Wooo';

const Header = (props) => {
    return (
        <header>
            <h1>A Portfolio Website</h1>
            <Router>
                <nav>
                    <NavLink activeClassName="active" exact to="/">Home</NavLink>
                    <NavLink activeClassName="active" exact to="/about">About</NavLink>
                    <NavLink activeClassName="active" exact to="/contact">Contact</NavLink>
                    <NavLink activeClassName="active" exact to="/projects">Projects</NavLink>
                    <Route exact path="/" component={Home}>
                        <Home/>
                    </Route>
                    <Route exact path="/about" component={About}>
                        <About />
                    </Route>
                    <Route exact path="/contact" component={Contact}>
                        <Contact />
                    </Route>
                    <Route exact path="/projects" component={Projects} />
                    <Route path="/wooo/:author/:bookTitle" component={Wooo} />
                </nav>
            </Router>
        </header>
    )
}

export default Header;
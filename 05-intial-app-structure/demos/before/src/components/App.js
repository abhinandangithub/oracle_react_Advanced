import React, { Component } from 'react';
import Header from './common/Header';
import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';
import CoursesPage from './courses/CoursesPage';
import { Route, Switch } from 'react-router-dom';
import PageNotfound from './common/PageNotfound';

class App extends Component {
    render() {
        return (
            <div className="container-fluid">
                <Header />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/about" component={AboutPage} />
                    <Route path="/courses" component={CoursesPage} />
                    <Route component={PageNotfound} />
                </Switch>
            </div>
        );
    }
}

export default App;
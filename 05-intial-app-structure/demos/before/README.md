1) Inside src create folder 
    component
        home
            HomePage.js
        about
            AboutPage.js
        common
            Header.js
        App.js

2)Configure application entry point in index.js with App Component
    import { BrowserRouter } from 'react-router-dom';
    import bootstrap
    import App

    render(<BrowserRouter><App /></BrowserRouter>, document.getElementById  ("app"));

3) create file index.css
    refer in index.js

4) Inside App.js import about and home component
    import Route from react-router-dom
    <Route exact path="/" component={HomePage} />

5) Inside Header file 
    improt NavLink from react-router-dom
    <NavLink to="/about" activeStyle={activeStyle}>About</NavLink>

6) In App.js
    add <Header/>

7) Handle unknown route
    create component PageNotFound in components folder

8) import Switch from react-router-dom
     to match only one route

9) create course folder and CoursesPage component
    add routing

import React from 'react';
import './App.css';
import Nav from './components/Nav'
import Home from './components/Home'
import Category from './components/Category'
import Products from './components/ProductsList'
import Admin from './components/Admin';
import Adminarea from './components/Adminarea'
import { fakeAuth } from './components/Admin';
import { BrowserRouter as Router, Route,Switch,Redirect } from 'react-router-dom';
function App() {
  const PrivateRoute = ({component: Component, ...rest}) => {
    return (
      <Route
        {...rest}
        render={(props) => fakeAuth.isAuthenticated === true
          ? <Component {...props} />
          : <Redirect to={{pathname: '/Admin', state: {from: props.location}}} />} />
    )

        }
  return (
    <Router>
          <div className="App">
      <Nav/>
      <Switch>
      <Route exact path="/" component={Home} />
       <Route path="/Category" component={Category} />
      <Route path="/Products" component={Products}/>
      <Route path= "/Admin" component={Admin} /> 
      <PrivateRoute   path='/Adminarea' component = {Adminarea} />
      </Switch>
    </div>

    </Router>
  );
}

export default App;

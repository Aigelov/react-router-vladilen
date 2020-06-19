import React, {Component} from 'react'
import './App.scss'
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'
import About from './About/About'
import Cars from './Cars/Cars'
import CarDetail from './CarDetail/CarDetail';

class App extends Component {
  state = {
    isLoggedIn: false
  }

  render() {
    return (
      <div>
        <nav className="nav">
          <ul>
            <li>
              <NavLink
                to='/'
                exact
                activeClassName={'wfm-active'}
              >Home</NavLink>
            </li>
            <li>
              <NavLink
                to='/about'
                activeClassName={'wfm-active'}
                activeStyle={{color: 'blue'}}
              >About</NavLink>
            </li>
            <li>
              <NavLink
                to={{ pathname: '/cars' }}
                activeClassName={'wfm-active'}
              >Cars</NavLink>
            </li>
          </ul>
        </nav>

        <hr/>

        <div style={{textAlign: 'center'}}>
          <h3>Is logged in {this.state.isLoggedIn ? 'TRUE' : 'FALSE'}</h3>
          <button onClick={() => this.setState({isLoggedIn: true})}>Login</button>
        </div>

        <hr/>

        <Switch>
          {/*localhost:3000*/}
          <Route path={'/'} exact render={() => <h1>Home page</h1>} />

          {/*localhost:3000/about*/}
          {
            this.state.isLoggedIn
            ? <Route path={'/about'} component={About}/>
            : null
          }

          {/*localhost:3000/cars/ford*/}
          <Route path={'/cars/:name'} component={CarDetail} />
          {/*localhost:3000/cars*/}
          <Route path={'/cars'} component={Cars} />
          {/*404 not found page*/}
          {/*<Route render={() => {*/}
          {/*  return (*/}
          {/*    <h1 style={{color: 'red', textAlign: 'center'}}>*/}
          {/*      404 not found*/}
          {/*    </h1>*/}
          {/*  )*/}
          {/*}} />*/}
          <Redirect to={'/'} />
        </Switch>
      </div>
    );
  }
}

export default App

import React, { useEffect } from 'react';
import TopNav from './components/layout/TopNav'
import RandomBeer from './components/beers/RandomBeer'
import { getBeers } from './store/beers/actions'


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import { useDispatch } from 'react-redux';

//process.env not working
// console.log(process.env.REACT_APP_BREWERYDB_API_KEY)

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBeers())
  }, [])

  return (
    <div className="App">
      <Router>
        <TopNav />
        <Switch>
          <Route exact path="/">
            BEER STUFF APP
          </Route>
          <Route path="/all-beers">
            {/* <BeerList /> */}
          </Route>
          <Route path="/random-beer" component={RandomBeer}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

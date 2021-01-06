import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";import axios from "axios";
const BASE_URL = 'https://swapi.dev/api/' // + /people /planets /starships
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // make an API call for both people and starships
  // set them both to state
  async getStarships() {
    try {
      const res = await axios.get(BASE_URL + 'starships');
      this.setState({ starships: res.data })
    } catch(e) {
      console.error(e);
    }
  }
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/planets">Planets</Link>
              </li>
              <li>
                <Link to="/people">People</Link>
              </li>
            </ul>
          </nav>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/planets">
            <Planets planets={ this.state.planets } />
            </Route>
            <Route path="/people">
              <People people={ this.state.people } />
            </Route>
            <Route path="">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
  );
  }
}
function Home() {
  return (
    <div>
      <h1>Home component</h1>
    </div>
  )
}
class People extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  async getPeople() {
    try {
      const res = await axios.get(BASE_URL + 'people');
      this.setState({ people: res.data })
    } catch(e) {
      console.error(e);
    }
  }
  componentDidMount() {
    this.getPeople();
  }
  render() {
    return (
      <div>
        <ul>
          {
            this.state.people && this.state.people.results.map(person => {
              console.log(person)
              return (
                <div>
                  <h1>Persons name: { person.name }</h1>
                  <h3>Persons height: { person.height }</h3>
                </div>
              )
            })
          }
        </ul>
      </div>
    )
  }
}
class Planets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  async getPlanets() {
    try {
      const res = await axios.get(BASE_URL + 'planets');
      this.setState({ planets: res.data })
    } catch(e) {
      console.error(e);
    }
  }
  componentDidMount() {
    this.getPlanets();
  }
  render() {
    return (
      <div>
        <h1>Planets:</h1>
        <ul>
          {
            this.state.planets && this.state.planets.results.map(planet => {
              console.log(this.state)
              return (
                <div>
                  <h1>Planet's name: { planet.name }</h1>
                </div>
              )
            })
          }
        </ul>
      </div>
    )
  }
}
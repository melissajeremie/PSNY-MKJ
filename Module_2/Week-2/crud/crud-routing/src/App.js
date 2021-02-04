// installed axios - npm i axios. What does axios do? axios make HTTP requests (calls)
  // import axios
// installed react router - npm i react-router-dom. What does router do? Router generates urls
  // import react-router-dom
  import React from 'react';
  import axios from 'axios';
  import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  const WINES_URL = 'http://myapi-profstream.herokuapp.com/api/712eac/wines';
  const BOOKS_URL = 'http://myapi-profstream.herokuapp.com/api/432dc3/books';
  const PEOPLE_URL = 'http://myapi-profstream.herokuapp.com/api/266e14/persons';

  class App extends React.Component {
    // constructor(props) {
    //   super(props);
    // }

    render() {
      return (
        <Router>
          <div>

            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/wines">Wines</Link>
              </li>
              <li>
                <Link to="/books">Books</Link>
              </li>
              <li>
                <Link to="/persons">People</Link>
              </li>
            </ul>

            <Switch>
              <Route path="/wines">
                <Wines />
              </Route>
              <Route path="/books">
                <Books />
              </Route>
              <Route path="/persons">
                <People />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>

          </div>
        </Router>
      );
    }
  }

  class Home extends React.Component {
    render() {
      return(
        <div className="home-div">
          <h1>Welcome to Wine, Books & People</h1>
          <h2>Where you can find a wine, a book or a people</h2>
        </div>
      )
    }
  }

  class Wines extends React.Component {
    constructor(props) {
      super(props);
      this.state = {}
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.selectWine = this.selectWine.bind(this);
      this.editWine = this.editWine.bind(this);
      this.submitEditedWine = this.submitEditedWine.bind(this);
    }
    async getWines() {
      try {
        const res = await axios.get(WINES_URL);
        this.setState({ wines: res.data });
      } catch(e) {
        console.error(e);
      }
    }
    componentDidMount() {
      this.getWines();
    }
    handleChange(e) {
      const { name, value } = e.target;
      // e.target.name
      // e.target.value
      this.setState({ [name]: value })
    }
    async handleSubmit(e) {
      e.preventDefault();
      // this.state.name
      // this.state.year
      // this.state.grapes
      const { name, year, grapes, country, region, description, picture, price } = this.state;
      const wine = { name, year, grapes, country, region, description, picture, price };
      try {
        const res = await axios.post(WINES_URL, wine);
        console.log(res.data);
        const updateRes = await axios.get(WINES_URL);
        this.setState({ wines: updateRes.data });
      } catch(e) {
        console.error(e.message);
      }
    }
    async handleDelete(id) {
      console.log(WINES_URL + id);
      try {
        const res = await axios.delete(WINES_URL + id); // target wine id
        console.log(res.data);
        const updateRes = await axios.get(WINES_URL);
        this.setState({ wines: updateRes.data });
      } catch(e) {
        console.error(e.message);
      }
    }
    selectWine(selectedWine) {
      this.setState({ selectedWine });
      // { selectedWine: selectedWine }
    }
    editWine(e) {
      const { name, value } = e.target;
      this.setState({ ...this.state, selectedWine: { ...this.state.selectedWine, [name]: value } })
    }
    async submitEditedWine(e) {
      e.preventDefault();
      try {
        const editedWine = this.state.selectedWine; // this obj has an id
        console.log(editedWine)
        // to send our patch to url + /:id
        const focusWine = WINES_URL + editedWine.id
        const res = await axios.patch(focusWine, editedWine);
        const resRefresh = await axios.get(WINES_URL);
        this.setState({ wines: resRefresh.data });
      } catch(e) {
        console.error(e);
      }
    }
    render() {
      return (
        <div className="wines">
          <ul>
            {/* render info */}
            {
              this.state.wines && this.state.wines.map(wine => (
                <li key={ wine.id }>
                  { wine.name }: price { wine.price } 
                  <button onClick={ () => this.handleDelete(wine.id) }>Delete wine</button>
                  <button onClick={ () => this.selectWine(wine) }>Edit wine</button>
                  <button>useless</button>
                </li>
              ))
            }
          </ul>
          <form className="new-wine-form"
            onChange={ this.handleChange }
            onSubmit={ this.handleSubmit }>
            <label>
              Wine name:
              <input type="text" name="name" />
            </label>
            <label>
              Year wine was made:
              <input type="text" name="year" />
            </label>
            <label>
              Grapes used:
              <input type="text" name="grapes" />
            </label>
            <label>
              Country of wine:
              <input type="text" name="country" />
            </label>
            <label>
              Wine region:
              <input type="text" name="region" />
            </label>
            <label>
              Description of wine:
              <input type="text" name="description" />
            </label>
            <label>
              Picture url:
              <input type="text" name="picture" />
            </label>
            <label>
              Price:
              <input type="text" name="price" />
            </label>
            <input type="submit" />
          </form>
          <hr></hr>
          {/* we want to show the form */}
          {/* only after we select a wine */}
          {/* if this.state.selectedWine exists */}
          {/* render this form below */}
          {/* this.state.selectedWine && formBelow */}
          {
            this.state.selectedWine && <form className="wine-edit-form"
              onChange={ this.editWine }
              onSubmit={ this.submitEditedWine }>
              <label>
                Wine name:
                <input type="text" name="name" defaultValue={ this.state.selectedWine.name } />
              </label>
              <label>
                Year wine was made:
                <input type="text" name="year" defaultValue={ this.state.selectedWine.year } />
              </label>
              <label>
                Grapes used:
                <input type="text" name="grapes" defaultValue={ this.state.selectedWine.grapes } />
              </label>
              <label>
                Country of wine:
                <input type="text" name="country" defaultValue={ this.state.selectedWine.country } />
              </label>
              <label>
                Wine region:
                <input type="text" name="region" defaultValue={ this.state.selectedWine.region } />
              </label>
              <label>
                Description of wine:
                <input type="text" name="description" defaultValue={ this.state.selectedWine.description } />
              </label>
              <label>
                Picture url:
                <input type="text" name="picture" defaultValue={ this.state.selectedWine.picture } />
              </label>
              <label>
                Price:
                <input type="text" name="price" defaultValue={ this.state.selectedWine.price } />
              </label>
              <input type="submit" />
            </form>
          }
        </div>
      )
    }
  }
  

  class Books extends React.Component {
    constructor(props) {
      super(props);
      this.state = {}
      this.handleBookChange = this.handleBookChange.bind(this);
      this.handleBookSubmit = this.handleBookSubmit.bind(this);
    }

    async getBooks() {
      try {
        const res = await axios.get(BOOKS_URL);
        this.setState({ books: res.data });
      } catch(e) {
        console.error(e);
      }
    }

    componentDidMount() {
      this.getBooks();
    }

    handleBookChange(e) {
      const { name, value } = e.target;
      // e.target.name
      // e.target.value
      this.setState({ [name]: value })
    }

    async handleBookSubmit(e) {
      e.preventDefault();
     
      const { title, author, releaseDate, image } = this.state;
      const book = { title, author, releaseDate, image };
      try {
        const res = await axios.post(BOOKS_URL, book);
        console.log(res.data);
        const updateRes = await axios.get(BOOKS_URL);
        this.setState({ books: updateRes.data });
      } catch(e) {
        console.error(e.message);
      }
    }
    async handleBookDelete(ev) {
      const  bookid  = ev.target;
      try {
        const res = await axios.delete(BOOKS_URL + '/' + bookid); // target book id
        console.log(res.data)
      } catch(e) {
        console.error(e.message)
      }
    }
    render() {
      return (
        <div className="books">
          <ul>
            {/* render info */}
            {
              this.state.books && this.state.books.map(book => <li>{ book.title }, written by  { book.author } <button>Delete Book</button></li>)
            }
          </ul>
          <form className="new-book-form"
            onChange={ this.handleBookChange }
            onSubmit={ this.handleBookSubmit }>
            <label>
              Title:
              <input type="text" name="title" />
            </label>
            <label>
              Author:
              <input type="text" name="author" />
            </label>
            <label>
              Release Date:
              <input type="text" name="release-date" />
            </label>
            <label>
              Image URL:
              <input type="text" name="image" />
            </label>
            <input type="submit" />
          </form>
        </div>
      )
    }
  }

  class People extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};

      this.handlePeopleChange = this.handlePeopleChange.bind(this);
      this.handlePeopleSubmit = this.handlePeopleSubmit.bind(this);
    }

    async getPeople() {
      try {
        const res = await axios.get(PEOPLE_URL);
        this.setState({ people: res.data });
      } catch(e) {
        console.error(e);
      }
    }

    componentDidMount() {
      this.getPeople();
    }

    handlePeopleChange(e) {
      const { name, value } = e.target;
      // e.target.name
      // e.target.value
      this.setState({ [name]: value })
    }

    async handlePeopleSubmit(e) {
      e.preventDefault();

      const { firstname, lastname, email, username } = this.state;
      const person = { firstname, lastname, email, username };
      try {
        const res = await axios.post(PEOPLE_URL, person);
        console.log(res.data);
        const updateRes = await axios.get(PEOPLE_URL);
        this.setState({ people: updateRes.data });
      } catch(e) {
        console.error(e.message);
      }
    }
    async handlePeopleDelete(ev) {
      const  personid  = ev.target;
      try {
        const res = await axios.delete(PEOPLE_URL + '/' + personid); // target person id
        console.log(res.data)
      } catch(e) {
        console.error(e.message)
      }
    }
    render() {
      return (
        <div className="people">
          <ul>
            {/* render info */}
            {
              this.state.people && this.state.people.map(person => <li>{ person.firstname } { person.lastname } <button>Delete User</button></li>)
            }
          </ul>
          <form className="new-person-form"
            onChange={ this.handlePeopleChange }
            onSubmit={ this.handlePeopleSubmit }>
            <label>
              First Name:
              <input type="text" name="firstName" />
            </label>
            <label>
              Last Name:
              <input type="text" name="lastName" />
            </label>
            <label>
              Email:
              <input type="text" name="email" />
            </label>
            <label>
              Username:
              <input type="text" name="username" />
            </label>
            <input type="submit" />
          </form>
        </div>
      )
    }
  }

  export default App;
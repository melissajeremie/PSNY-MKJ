class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = { name: "Angel" }
      this.handleChange = this.handleChange.bind(this);
      this.changeName = this.changeName.bind(this);
    }
    // what does e stand for? event object from browser
    handleChange(e) {
      const { name, value } = e.target;
      // { 'name': 'something else'}
      // { [name] => username | password }
      this.setState({ [name]: value });
    }
      // console.log(name, value);
      // this.setState(prevState => ({
          // 	newUser: {
          // 		...prevState.newUser, [name]: value
          // 	}
          // }));
    changeName() {
      this.setState({ name: "Angel's twin" });
    }
    render() {
      return (
        <div>
          <h1>{ this.state.name }</h1>
          <form onChange={ this.handleChange }>
            <label>
              username:
              <input type="text" name="username" />
            </label>
            <label>
              password:
              <input type="text" name="password" />
            </label>
          </form>
          <button onClick={ this.changeName }>Change name!</button>
        </div>
      )
    }
  }
  ReactDOM.render(<App />, document.getElementById('container'));
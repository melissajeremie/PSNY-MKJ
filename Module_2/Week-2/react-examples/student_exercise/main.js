class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {}
    }
    async componentDidMount() {
        console.log(this.state.people)
      try {
        const res = await axios.get('https://swapi.dev/api/people')
        // console.log(res.data.results);
        this.setState({ people: res.data.results });
      }  catch(e) {
        console.error(e)
      }
    }
    render() {
      return(
        <div>
            {this.state.people && this.state.people.map(x => <li>{x.name}, {x.age}</li>) || "Loading..."}
        </div>
      )
    }
  }
  ReactDOM.render(<App />, document.getElementById('container'));
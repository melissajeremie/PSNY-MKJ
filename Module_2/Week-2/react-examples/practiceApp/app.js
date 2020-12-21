const meals = ["steak", "eggs", "lamb chops", "bacon", "ribs", "salmon", "scallops", "stew goat", "octopus", "chicken wings"];

class practiceApp extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            title: "Carnivore Meal Generator"
        }
    }
    componentDidMount(){
        console.log(this.state)
    }
    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
            </div>
        )
    }
}

ReactDOM.render(<practiceApp />, document.getElementById('container'))
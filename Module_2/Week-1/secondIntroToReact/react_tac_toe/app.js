// Use react to render an h1 with whatever you want

const santa = "HO HO HO!";
const pop = "bubbly"

// ReactDOM.render(/* element we want to render*/, /* element we want to render in */)

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>React Tac Toe</h1>
            </div>
            
        )
    }
}

class Player extends React.Component {
    render() {
        return (
            <div>
                <h2>Player</h2>
                <h3>Wins:</h3>
            </div>
        )
    }
}

// Our first component 
// a class component, as such needs render method
class App extends React.Component {
    // in this render method
    // we're going to return JSX (html in JS) to render
    render() {
        return (
            <div>
                <Header />
                <Player />
            </div>
        )
    }
}


ReactDOM.render(
<App />,
document.getElementById('container')
);
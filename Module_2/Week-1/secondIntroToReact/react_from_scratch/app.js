const message = "Hello, World!"
const nameVar = "Melissa J."
const obj = {
    firstName: "Melissa",
    lastName: "J." ,
    faveFood: "Steak"
}

// document.addEventListener('DOMContentLoaded',() =>{
//     document.getElementById('container').innerHTML = message;
// })

// ReactDOM.render(/* element we want to render*/, /* element we want to render in */)

ReactDOM.render(
    <h1>{Math.PI}</h1>,
    document.getElementById('container')
)
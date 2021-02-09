import React, { useEffect, useState } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
function App() {
  // this.state = {} // we fill in later w/ class components
  const [mexfood, setMexfood] = useState(null);
  // ^^
    // this.state = { mexfood: null };
  // setMexfood gives us functionality equal to this.setState({ mexfood: value });
  async function getMexicanDishes() {
    try {
      const res = await axios.get('http://localhost:8080/mexican');
      console.log(res.data);
      setMexfood(res.data);
      // equivalent to this.setState({ mexfood: res.data });
    } catch(e) {
      console.error(e, e.message);
    }
  }
  // acts the same as a component did mount
    // notice the square brackets
  useEffect(() => {
    getMexicanDishes();
  }, [])
  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}
export default App;
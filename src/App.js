import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './Home';
import PlayerPage from './PlayerPage';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://www.youtube.com/watch?v=bMknfKXIFA8');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/player" component={PlayerPage} />
      </div>
    </Router>
  );
}

export default App;

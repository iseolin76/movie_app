import React from 'react';
import axios from "axios";
import propTypes from "prop-types";

class App extends React.Component{
  state = {
    isLoading: true,
    mavies: []
  };

  getMovies = async => {
    const movies = await axios.get("https://yts.mx/api/v2/list_movies.json")
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading" : "We are ready"}</div>;
  }
}

export default App;
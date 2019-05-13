import React, { Component } from "react";
import "./App.css";
import Movie from "./Movie";

const movies = [
  {
    title: "Matrix",
    poster:
      "https://upload.wikimedia.org/wikipedia/en/thumb/0/06/Ultimate_Matrix_Collection_poster.jpg/220px-Ultimate_Matrix_Collection_poster.jpg"
  },
  {
    title: "Full Metal Jacket",
    poster: "https://i.pinimg.com/736x/36/1e/cd/361ecdb85a3767f70810cbe2cdaaf1a4.jpg"
  },
  {
    title: "Oldboy",
    poster:
      "https://upload.wikimedia.org/wikipedia/en/thumb/b/bb/Oldboy_2013_film_poster.jpg/220px-Oldboy_2013_film_poster.jpg"
  },
  {
    title: "Star wars",
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY38LKiZ8gWEstGRDOvH0T0e8t7QgwChguucdmWeHQ9O2PWYkL"
  }
];

class App extends Component {
  //Render: componentWillMount() → render() → componentDidMount()
  //Update: componentWillReceiveProps() → shouldComponentUpdate() → componentWillUpdate() → render() → componentDidUpdate()

  componentWillMount() {
    console.log("will mount");
  }

  componentDidMount() {
    console.log("did mount");
  }

  render() {
    console.log("render");
    return (
      <div className="App">
        {movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index} />;
        })}
      </div>
    );
  }
}

export default App;

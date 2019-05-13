import React, { Component } from "react";
import "./App.css";
import Movie from "./Movie";

class App extends Component {
  state = {
    movies: [
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
    ]
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        movies: [
          {
            title: "Avengers",
            poster: "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg"
          },
          ...this.state.movies
        ]
      });
    }, 2000);
  }

  render() {
    console.log("render");
    return (
      <div className="App">
          return <Movie title={movie.title} poster={movie.poster} key={index} />;
        })}
      </div>
    );
  }
}

export default App;

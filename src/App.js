import React, { Component } from 'react';
import Search from './Components/Search';
import './App.css';

class App extends Component {
  // constructor(props) {
  //   super(props);
  //
  //   this.state = {
  //     movieID: 157336
  //   }
  // }

  render() {
    return (
      <div className="App">
        {/* <Search fetchMovieID={this.fetchMovieID.bind(this)} />
        <Movie data={this.state} /> */}
        <Search />
      </div>
    );
  }

  // API call function
  // fetchApi(url) {
  //
  //   fetch(url).then((res) => res.json()).then((data) => {
  //     // Update state with API data
  //     this.setState({
  //       movieID: data.id,
  //       original_title: data.original_title,
  //       tagline: data.tagline,
  //       overview: data.overview,
  //       poster: data.poster_path,
  //       genre: data.genres,
  //       release: data.release_date,
  //       runtime: data.runtime,
  //       backdrop: data.backdrop_path
  //     });
  //   });
  // }
  // End API call function

  // fetchMovieID(movieID) {
  //   let url = `https://api.themoviedb.org/3/movie/${movieID}?&api_key=bafa92ba7c3f1f27e5848f206cf3d4f6`
  //   this.fetchApi(url);
  // }
  // // End fetchMovieID function
  // //
  // componentDidMount() {
  //   let url = `https://api.themoviedb.org/3/movie/${this.state.movieID}&api_key=bafa92ba7c3f1f27e5848f206cf3d4f6`
  //   this.fetchApi(url);
  // }


  //


}

export default App;

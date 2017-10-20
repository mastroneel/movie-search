import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MovieModal from './MovieModal';
import Request from 'superagent';
import ReactBootstrap from 'react-bootstrap';
import _ from 'lodash';

class Search extends Component {
  constructor(){
    super();
    this.state = {};
  }

  updateSearch(){
    this.search(this.refs.query.value);
  }

  search(query){
    var url = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=bafa92ba7c3f1f27e5848f206cf3d4f6`;
    Request.get(url).then((response) => {
      this.setState({
        movies: response.body.results,
        results: response.body.total_results,
      });
    });
  }

  componentWillMount(){
    this.search();
  }

  render() {
    var movieInfo = _.map(this.state.movies, (movie) => {
      return (
        <div key={movieId} className="col-xs-12 movie-info">
          <div>{movie.title}</div>
          <div>{movie.release_date}</div>
          <div><img src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt="poster" /></div>
          <div>{movie.overview}</div>
        </div>
      );
    });

    var movieId = _.map(this.state.movies, (movie) => {
      return (
        <div>
          {movie.id}
        </div>
      );
    });

    var movieThumbnail = _.map(this.state.movies, (movie) => {
      return (
        <div className="col-xs-12 col-sm-4 col-lg-3 movie-thumbnail">
          <div>
            <img src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt="poster not available" />
          </div>
          <div>
            <MovieModal
              title={movie.title}
              year={movie.release_date}
              posterPath={movie.poster_path}
              overview={movie.overview}
              rating={movie.vote_average}
            />
          </div>
        </div>
      );
    });

    return (
      <div className="Search">
        <h1>Search for a movie title...</h1>
        <form>
          <input ref="query" onChange={ (e) => { this.updateSearch(); } } type="text" />
        </form>
        {movieThumbnail}
      </div>
    );
  }
}

export default Search;

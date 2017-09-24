import React, { Component } from 'react';
import Request from 'superagent';
import _ from 'lodash';

class Search extends Component {
  constructor(){
    super();
    this.state = {};
  }

  componentWillMount(){
    this.search();
  }

  componentDidMount(){

  }

  componentWillReceiveProps(nextProps){

  }

  componentWillUpdate(nextProps, nextState){

  }

  componentWillUnmount(){

  }

  updateSearch(){
    this.search(this.refs.query.value);
  }

  search(query){
    var url = `http://api.themoviedb.org/3/search/movie?query=${query}&api_key=bafa92ba7c3f1f27e5848f206cf3d4f6`;
    Request.get(url).then((response) => {
      this.setState({
        movies: response.body.results,
        results: response.body.total_results
      });
    });
  }

  render() {
    var movies = _.map(this.state.movies, (movie) => {
      return <li>{movie.original_title}</li>;
    })
    return (
      <div className="Movie">
        <input ref="query" onChange={ (e) => { this.updateSearch(); } } type="text" />
        <ul>{movies}</ul>
      </div>
    );
  }
}

export default Search;

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import _ from 'lodash';

class Movie extends Component {

  render() {
    // let data = this.props.data;
    //   // If movie is found, then...
    //
    //   let posterIMG = 'https://image.tmdb.org/t/p/w500' + data.poster,
    //   movieID: data.id,
    //   original_title: data.original_title,
    //   tagline: data.tagline,
    //   overview: data.overview,
    //   poster: data.poster_path,
    //   genre: data.genres,
    //   release: data.release_date,
    //   runtime: data.runtime,
    //   backdrop: data.backdrop_path;
    //
    //   // Image placeholder for movies with no image
    //   if(data.poster== null){
    //     posterIMG = 'https://www.motorolasolutions.com/content/dam/msi/images/no-image-available/ImageNotAvailable_LG.jpg';
    //   }


    // var title = this.props.title;
    //
    // var year = this.props.year;
    //
    // var poster = this.props.poster;
    //
    // var movieState = this.props.movieState;
    //
    // var overview = this.props.overview;

    var movieInfo = this.props.movieInfo;


    return (
      <div className="Movie">
        <h2>Movie</h2>
        {movieInfo}
        {/* {title}
        {year}
        {poster}
        {overview} */}
        {/* <div className="poster-container">
          <img className="poster" src={posterIMG} />
        </div>
        <h1>{data.original_title}</h1>
        <h2>{data.tagline}</h2>
        <p>{data.overview}</p>
        <div className="more-information">
          <h3>{data.genres}</h3>
          <h3>Running Time: {data.runtime}</h3>
        </div> */}
      </div>
    );
  }
  // componentDidUpdate() {
  //   document.body.style.backgroundImage = 'url(' + backdropIMG +')';
  // }
}


function nestedDataToString(nestedData) {
  let nestedArray = [],
      resultString;
  nestedArray.forEach(function(item, i){
    nestedArray.push(item.name);
  });
  resultString = nestedArray.join(', '); // array to string
  return resultString;
};

export default Movie;

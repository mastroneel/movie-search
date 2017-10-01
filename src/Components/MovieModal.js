import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import _ from 'lodash';

class MovieModal extends React.Component {
  constructor(){
    super();

    this.state = {
      isActive: false
    }
  }

  componentWillMount(){
    Modal.setAppElement('body');
  }






  toggleModal = () => {
    this.setState({
      isActive: !this.state.isActive
    })
  }

  render(){

    var title = this.props.title;

    // var movieInfo = this.props.movieInfo;

    var year = this.props.year;

    var posterPath = this.props.posterPath;

    var overview = this.props.overview;

    var rating = this.props.rating;

    var genres = this.props.genres;


    return(
      <section>
        <button onClick={this.toggleModal}>{title}</button>
        <Modal isOpen={this.state.isActive} onRequestClose={this.toggleModal}>
          <button onClick={this.toggleModal}>Close Modal</button>
          <div>
            <img src={`https://image.tmdb.org/t/p/w185/${posterPath}`} alt="poster" />
          </div>
          <div>
            {title}
          </div>
          <div>
            {year}
          </div>
          <div>
            {overview}
          </div>
          <div>
            <p>
              Rating: {rating} / 10
            </p>
          </div>
          <div>
            {genres}
          </div>



          {/* {movieInfo} */}
        </Modal>
      </section>
    )
  }
}

export default MovieModal;

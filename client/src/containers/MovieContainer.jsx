 import React from 'react';
 import MovieDisplay from '../components/MovieDisplay';
 import MovieDetails from '../components/MovieDetails';

 class MovieContainer extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
       movies: [],
       focusMovie: null
     };
     this.setFocusMovie = this.setFocusMovie.bind(this);
   }

 componentDidMount() {
   const url = 'https://netflixroulette.net/api/api.php?actor=Arnold%20Schwarzenegger';
   const request = new XMLHttpRequest();
   request.open('GET', url);

   request.onload = () => {
     if (request.status === 200) {
       const jsonString = request.responseText;
       const data = JSON.parse(jsonString);
       this.setState({ movies: data, focusMovie: data[0] });
     }
   };

   request.send();
 }

 setFocusMovie(movie) {
   this.setState({ focusMovie: movie });
 }

 render() {
   return (
     <div>
      <div className='title-div'>
       <p className='title'>Schwarzenegger Movies</p>
      </div> 
       <MovieDisplay
       movies = { this.state.movies }
       selectMovie = { this.setFocusMovie } />
       <MovieDetails movie = { this.state.focusMovie } />
     </div> 
   );
  }
 }

 export default MovieContainer;
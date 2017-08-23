 import React from 'react';
 import MovieDetails from './MovieDetails.jsx'

 class MovieDisplay extends React.Component {
   constructor(props) {
     super(props);

     this.state = {
       selectedIndex: undefined
     };
     this.handleChange = this.handleChange.bind(this);
   }

 handleChange(event) {
   const newIndex = event.target.value;
   this.setState({ selectedIndex: newIndex });

   const selectedMovie = this.props.movies[newIndex];
   this.props.selectMovie(selectedMovie);
 }

 render() {
   const options = this.props.movies.map((movie, index) => {
     return <option value={index} key={index}> {movie.show_title}</option>
   });
   return(
     <select id='movies' value={ this.state.selectedIndex } onChange={ this.handleChange }> {options}
     </select>
   );
 }
 }
 export default MovieDisplay;
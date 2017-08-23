 import React from 'react';

 class MovieDetails extends React.Component {
   render() {
     if(!this.props.movie) {
       return null;
     }
     return(
       <div>
         <img src={this.props.movie.poster}/>
         <h3>Summary: </h3>
         <p>{this.props.movie.summary}</p>
       </div>
     );
   }
 }

 export default MovieDetails;
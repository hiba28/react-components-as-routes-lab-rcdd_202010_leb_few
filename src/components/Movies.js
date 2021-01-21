import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>

        <div>
          <ul>
            {movies.map(item => <li> {item.title} </li>)}
          </ul>
        </div>
    </div>
  );
};

export default Movies;

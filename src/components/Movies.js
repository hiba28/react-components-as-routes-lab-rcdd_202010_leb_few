import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>

        {
          movies.map(item => {
            <div>
                {item.title}
                {item.time}
                <ul>
                  { item.genres.map (e => <li> e </li> )}
                </ul>
            </div>
          )}
        }
    </div>
  );
};

export default Movies;

import React from 'react';
import { actors } from '../data';

// data = {name: "", movies: ["",""]}

const Actors = () => {

  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map( (actor) => {
        return (
          <div className="actor">
              <h2>Name: {actor.name}</h2>
              <p>Movies:</p>
              <ul>
              {actor.movies.map( (movie) => {
                return (
                  <li>{movie}</li>
                )
              })}
              </ul>
          </div>
        )
      })}
    </div>
  );
};

export default Actors;

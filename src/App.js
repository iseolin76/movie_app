import React from 'react';
import propTypes from "prop-types";

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/0.5</h4>
      <p>{picture}</p>
    </div>
  )
}

Food.propTypes = {
  name: propTypes.string.isRequired,
  picture: propTypes.string.isRequired,
  rating: propTypes.number.isRequired
};

const foodLike = [
  {
    id: 1,
    name: "kimchi",
    image: "kimchi",
    rating: 5
  },
  {
    id: 2,
    name: "ramen",
    image: "ramen",
    rating: 4.9
  },
  {
    id: 3,
    name: "samgionsal",
    image: "samgionsal",
    rating: 4.8
  },
  {
    id: 4,
    name: "dnddj",
    image: "dnddj",
    rating: 4.7
  }
]

function App() {
  return (
    <div>
      {foodLike.map(dish =>
        <Food 
        key={dish.id} 
        name={dish.name} 
        picture={dish.image}
        rating={dish.rating} 
        />
      )}
    </div>
  );
}

export default App;

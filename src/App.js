import React from 'react';

function Food({fav}){
  return <h1>I like {fav}</h1>
}

const foodLike = [
  {
    name: "kimchi",
    image: "kimchi"
  },
  {
    name: "ramen",
    image: "ramen"
  },
  {
    name: "samgionsal",
    image: "samgionsal"
  },
  {
    name: "dnddj",
    image: "dnddj"
  }
]

function App() {
  return (
    <div>
      {foodLike.map(dish => 
      <food name={dish.name} />)}
    </div>
  );
}

export default App;

import React from 'react';

function Food({name, picture}){
  return (
    <div>
      <h2>I like {name}</h2>
      <p>{picture}</p>
    </div>
  )
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
        <Food name={dish.name} picture={dish.image} />
      )}
    </div>
  );
}

export default App;

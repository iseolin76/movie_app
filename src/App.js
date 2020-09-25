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
    id: 1,
    name: "kimchi",
    image: "kimchi"
  },
  {
    id: 2,
    name: "ramen",
    image: "ramen"
  },
  {
    id: 3,
    name: "samgionsal",
    image: "samgionsal"
  },
  {
    id: 4,
    name: "dnddj",
    image: "dnddj"
  }
]

function App() {
  return (
    <div>
      {foodLike.map(dish => 
        <Food key={dish.id} name={dish.name} picture={dish.image} />
      )}
    </div>
  );
}

export default App;

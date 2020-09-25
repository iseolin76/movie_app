import React from 'react';

function Food({fav}){
  return <h1>I like {fav}</h1>
}

function App() {
  return (
    <div>
      <div>Hello</div>
      <Food fav="kimchi"/>
      <Food fav="ramen"/>
      <Food fav="samgionsal"/>
      <Food fav="dndjd"/>
    </div>
  );
}

export default App;

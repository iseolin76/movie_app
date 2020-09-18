import React from 'react';

function Food(){
  return <h1>I like Food</h1>
}

function App() {
  return (
    <div>
      <div>Hello</div>
      <Food fav="kimchi" something={true} />
    </div>
  );
}

export default App;

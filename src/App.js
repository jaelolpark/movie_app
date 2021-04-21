import React from 'react';
import PropTypes from 'prop-types';


export default class App extends React.Component {
  state = {
    count: 0
  };
  add = () => {
    this.setState(current => ({count: current.count+1}));
  };
  minus = () => {
    this.setState(current => ({count: current.count-1}));
  };

  componentDidMount() {
    console.log("component rendered");
  }
  componentDidUpdate() {
    console.log("I just updated")
  }

  render() {
    console.log("I am rendering")
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>minus</button>
      </div>
    );
  };
};












// =====================================================================


//   const foodIlike = [
//     { 
//       id:1,
//       name: "Jjajangmyun",
//       image: "https://i.ytimg.com/vi/Yn8ZFTBCJJQ/maxresdefault.jpg",
//       rating: 5
//     },
//     { 
//       id:2,
//       name: "Ramen",
//       image: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Korea_Ramyeon.jpg",
//       rating: 3
//     }
//   ]

// // function renderFood(dish) {
// //   return <Food name={dish.name} picture={dish.image} /> 
// // }


// function Food({name, picture, rating}) {
//   return (
//     <div>
//       <h3>I like {name}</h3>
//       <h4>{rating}/5.0</h4>
//       <img src={picture} alt={name}/>
//     </div>
//   )
// };

// Food.propTypes= {
//   name: PropTypes.string.isRequired,
//   picture: PropTypes.string.isRequired,
//   rating: PropTypes.number.isRequired
// };

// function App() {
//   return (
//     <div>
//       {foodIlike.map(dish => (
//         <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
//       ))}
//       {/* {foodIlike.map(renderFood)} */}
//     </div>
//   ); 
// }

// export default App;

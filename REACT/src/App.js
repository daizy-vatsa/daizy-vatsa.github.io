import React, {Component, useState} from 'react';


//// HOOKS

// const App = () =>{

//   const [count, setCount] = useState(0);
//   const increment = () => {
//     setCount(count +1)
//   }

//   return(
//     <div>
//       <button onClick={increment}>     
//        {count}
//       </button>    
//     </div>
//   )
// }

//// CLASS Component

// class App extends Component {
//   state = {
//     count: 0
//   };
//   increment = () => {
//     this.setState({
//       count: this.state.count +1
//     });
//   };

// render() {
//   return (
//     <dic>
//       <button onClick={this.increment}>
//         {this.state.count}
//       </button>
//     </dic>
//   )
// }

// }

//// CLASS Component  with compdid mount and update


class App extends Component {
  state = {
    count: 0
  };
  increment = () => {
    this.setState({
      count: this.state.count +1
    });
  };

componentDidMount () {
  document.title = this.state.count;
}


componentDidUpdate () {
  document.title = this.state.count;
}

render() {
  return (
    <dic>
      <button onClick={this.increment}>
        {this.state.count}
      </button>
    </dic>
  )
}

}





export default App;

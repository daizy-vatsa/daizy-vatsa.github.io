import React, {Component, useState, useEffect} from 'react';

const App = () => {

  const [news, setNews] = useState([]);
  const fetchNews = () =>{
    fetch("http://hn.algolia.com/api/v1/search?query=react")
    .then(response =>response.json())
    .then(data => setNews(data.hits))
    .catch(error => console.log(error));  
  }  
  useEffect(()=>{
  fetchNews();
  });
  
  return (
    <div>
      {news.map((n, i)=>
        <p key={i}> {n.title}</p>
      )}
    </div>
  )
  };

  export default App;
  
  
// import axios from 'axios';
  
//   const App = () => {
  
//   const [news, setNews] = useState([]);
//   const getNews = () =>{
//     axios.get("http://hn.algolia.com/api/v1/search?query=react")  
//     .then(response => setNews(response.data.hits))
//     .catch(error => console.log(error));  
//   }
//   useEffect(()=>{
//     getNews();
//   });
  
//   return (
//     <div>
//       {news.map((n, i)=>
//         <p key={i}> {n.title}</p>
//       )}
//     </div>
//   )
//   };


//   export default App;


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



// // HOOKS use effects

// const App = () =>{

//   const [count, setCount] = useState(0);
//   const increment = () => {
//     setCount(count +1)
//   }

//   // use effect is a function and take another function as an argument

// useEffect(() =>{
// document.title = {count}
// });

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


// class App extends Component {
//   state = {
//     count: 0
//   };
//   increment = () => {
//     this.setState({
//       count: this.state.count +1
//     });
//   };

// componentDidMount () {
//   document.title = this.state.count;
// }


// componentDidUpdate () {
//   document.title = this.state.count;
// }

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



// const App = () => {
//   const items = [
//     {name: 'Apple', price: 200},
//     {name: 'Samsung', price:600},
//     {name: 'Sony', price:450},
//     {name:'Lg', price:300},
//     {name:'Philips', price:500},
//   ]

//   const total = items.reduce((current, item) =>{
//     return item.price + current
//   }, 0)

//   return(
//     <div>
//      ------------------------------------------------------------------------------------- {total}
//     </div>
//   )

// }

// export default App;










import React from "react";
import { useDispatch,useSelector } from "react-redux";

const App =()=> {
  const count = useSelector(state => state.count)
  const dispatch = useDispatch()
    const increment = () => {
        dispatch({
          type: "INCREMENT"
        });
      };

    const decrement = () => {
        dispatch({
          type: "DECREMENT"
        });
      };
    const reset = () => {
      dispatch({
        type: "RESET"
      });
    };


    return (
      <div className="App mt-5">
        <button onClick={increment} className="btn btn-success mr-5">
          Increment
        </button>
        <button onClick={decrement} className="btn btn-danger">
          Decrement 
        </button>
        <h2 className="mt-5 display-1">{count}</h2>
        <button onClick={reset} className="btn btn-primary">
          Reset
        </button>
      </div>
    );
  
}

export default App;


// Parent Component
// import React from 'react';
// import data from './Data';
// import Comment from './components/Comment';
// import Navbar from "./components/Navbar";
// import Clock from "./components/Clock";
// import Form from './components/Form';
// import UnsplashSearch from './components/UnsplashSearch';
// import UnsplashList from "./components/UnsplashList";
// import unsplash from './services/UnsplashService'

// // get image from api unsplash
// class App extends React.Component {
//   state = {images: []}

//   onSearchSubmit = async (term) => {
//     const response = await unsplash.get ("/search/photos", {
//       params: {query: term},
//     });
//     this.setState ({ images: response.data.results});
//     console.log(response.data.results);
//   }
//   render () {
//     return (
//       <div className='ui container' style={{marginTop: "10px"}}>
//          <Navbar/>
//          <Clock />
//         <UnsplashSearch onSubmit = {this.onSearchSubmit} />
//         <UnsplashList images = {this.state.images} />
//       </div>
//     );
//   }
// }

// // Import the React and ReactDOM libraries 
// import React, { useState, useEffect } from "react";

// // Create a function with Hooks 
// function App() {
//     const [date, setDate] = useState(new Date());

//     function refreshClock () {
//       setDate(new Date());
//     }

//     useEffect (() => {
//       const timerId = setInterval (refreshClock, 1000);
//       return function cleanup() {
//         clearInterval (timerId);
//       };
//     }, [] );
//     return (
//             <>
//                <span>
//                 {date.toLocaleTimeString()}
//                </span>
//             </>
//     );
//  }



// //  Function

// function App () {
//     // const [likes, setLikes] = useState (0)
//     return (
      
//       <>
//         <Navbar/>
//         <Clock />
//         {/* <Form />
//          {
//             data.map((item, index) => (
//               <Comment key={index} item={item}/>
//            ))
//           } */}
//          </>
//     );
//   };



// Class Component
// class App extends React.Component {
//   render () {
//     return (
//       <div className='ui container comments'>
//          {
//             this.props.data?.map((item, index) => (
//         <div className='comment' key={index}>
//           <a href='/' className='avatar'>
//             <img alt='avatar' src={item.avatar}/>
//           </a>
//           <div className='content'>
//             <a href='/' className='author'>
//              {item.name}
//             </a>
//             <div className='metadata'>
//               <span className='date'>Today, {item.date}</span>
//             </div>
//             <div className='text'>{item.comment}</div>
//           </div>
//         </div>    
//            ))
//           }
//          </div>
//     );
//   }
// };



//     // Build command comment by HardCore
//     <div className = "ui container comments">
//       <div className='comment'>
//         <a href='/' className='avatar'>
//           <img alt='avatar' src={faker.image.avatar()} />
//         </a>
//         <div className='content'>
//           <a href='/' className='author'>
//             Dani
//           </a>
//           <div className='metadata'>
//             <span className='date'>
//               Today at 8.00 AM
//             </span>
//           </div>
//           <div className='text'>
//             Test Comment
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
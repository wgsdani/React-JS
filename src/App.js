// Parent Component

import React from 'react';
import data from './Data';
import Comment from './components/Comment';
import Navbar from "./components/Navbar";
import Clock from "./components/Clock";
import Form from './components/Form';
import UnsplashSearch from './components/UnsplashSearch';
import UnsplashList from "./components/UnsplashList";
import unsplash from './services/UnsplashService'

// get image from api unsplash
class App extends React.Component {
  state = {images: []}

  onSearchSubmit = async (term) => {
    const response = await unsplash.get ("/search/photos", {
      params: {query: term},
    });
    this.setState ({ images: response.data.results});
    console.log(response.data.results);
  }
  render () {
    return (
      <div className='ui container' style={{marginTop: "10px"}}>
         <Navbar/>
         <Clock />
        <UnsplashSearch onSubmit = {this.onSearchSubmit} />
        <UnsplashList images = {this.state.images} />
      </div>
    );
  }
}

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



export default App;
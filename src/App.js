// Parent Component

import React from 'react';
import data from './Data';
import Comment from './components/Comment';


//  Function

function App () {
    // const [likes, setLikes] = useState (0)
    return (
      <div className='ui container comments'>
         {
            data.map((item, index) => (
              <Comment key={index} item={item}/>
           ))
          }
         </div>
    );
  };



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
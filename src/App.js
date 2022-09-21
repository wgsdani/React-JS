import './App.css';
import { faker } from "@faker-js/faker";

function App() {
  const date = new Date();
  const data = [
    {
      name : "Dani Mulyana",
      date : date.toLocaleDateString(),
      comment : "Halooo",
      avatar: faker.image.avatar()
    },
    {
      name : "Ronatio Silaban",
      date : date.toLocaleDateString(),
      comment : " Hiii",
      avatar: faker.image.avatar()
    },
    {
      name : "Ramdhani Arya",
      date : date.toLocaleDateString(),
      comment : "Hawaiii uu",
      avatar: faker.image.avatar()
    }
  ];
  return (
      <div className='ui container comments'>
         {
            data?.map((item, index) => (
        <div className='comment' key={index}>
          <a href='/' className='avatar'>
            <img alt='avatar' src={item.avatar}/>
          </a>
          <div className='content'>
            <a href='/' className='author'>
             {item.name}
            </a>
            <div className='metadata'>
              <span className='date'>{item.date}</span>
            </div>
            <div className='text'>{item.comment}</div>
          </div>
        </div>    
           ))
          }
         </div>
    );
  };

























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
import React from "react"

export default function Comment({item}){
    const [likes, setLikes] = React.useState(0)

    return(
        <div className='comment' >
          <a href='/' className='avatar'>
            <img alt='avatar' src={item.avatar}/>
          </a>
          <div className='content'>
            <a href='/' className='author'>
             {item.name}
            </a>
            <div className='metadata'>
              <span className='date'>Today, {item.date}</span>
              <h6>| Likes  {likes}</h6>
            </div>
            <div className='text'>{item.comment}</div>
          </div>
            <div>
               <button onClick={() => setLikes((prev) =>prev + 1)}>Like</button>
            </div>
        </div>    
    )
}
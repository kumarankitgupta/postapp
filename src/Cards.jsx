import React, { useState } from 'react'
import './cards.css'
function Cards(props) {
    const [likeCount,setlikeCount] = useState(0);
    const [disLikeCount,setdilikeCount] = useState(0);
  return (
    <div className='card'>
        <img src={props.imageName} />
        <h3 style={{color:'Red'}}>{props.postDescripton}</h3>
        <div style={{marginBottom:'5px'}}>
        <span className='like' onClick={()=>setlikeCount(likeCount+1)}><i className="fa-solid fa-thumbs-up fa-lg"></i> {likeCount}</span>
        <span className='dislike' onClick={()=>setdilikeCount(disLikeCount+1)}><i className="fa-solid fa-thumbs-down fa-lg"></i> {disLikeCount}</span>
        </div>
    </div>
  )
}

export default Cards
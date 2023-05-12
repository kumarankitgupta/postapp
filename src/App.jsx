import React from 'react'
import Cards from './Cards'
import "./style.css"
function App() {
  var arr = [1,2,3,4,5,6,7]
  return (
    <div className='post-container'>
    {
      arr.map(()=>{
      return <Cards imageName={'https://picsum.photos/id/237/536/354'} postDescripton={'Some Random post'}/>
      })
    }
    
    </div>
  )
}

export default App
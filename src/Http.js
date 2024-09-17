import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Http = () => {
  const [inp, setinp] = useState("")
  const [loaded, setloaded] = useState(0)
  const [data, setdata] = useState([])

  useEffect(() => {
    axios.get("https://dummyjson.com/products")
  .then((res)=>{ 
    console.log(res.data.products);
    setdata(res.data.products)
  }).catch((err)=>{
    console.log(err);
    
  })

},[])


  return (
    <div>
      <input onChange={(e)=> setinp(e.target.value)} type="text" />
      <button onclick={()=> setloaded(loaded +1)}>Changes</button>
      <div className='d-flex justify-content-between align-items-center flex-wrap'> 
        {data.map((prod)=>{
        
        return(
           <>
        <div>
          <img src={prod.thumbnail} alt =""/>
          <p>{prod.title}</p>
          <Link to={`/one/${prod.id}`} >See More</Link>
        </div>
        </>
          )  
          
})}
      
      </div>
    </div>
  )
}

export default Http
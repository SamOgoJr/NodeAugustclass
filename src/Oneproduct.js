import React , {useEffect, useState}from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Oneproduct = () => {
    const [oneprod, setoneprod] = useState({})
    const {id} = useParams()
    console.log(id);
    useEffect(() =>{
        axios.get(`https://dummyjson.com/products/${id}`)
        .then((res)=>{
            console.log(res); 
            setoneprod(res.data)     
        }).catch((err)=>{
            console.log(err);
            
      })
    }, [])
    
  return (
    <div>
        <img src={oneprod.thumbnail} alt="" />
        <h1>{oneprod.title}</h1>
        <p>{oneprod.price}</p>
    </div>
  )
}

export default Oneproduct
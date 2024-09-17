import React from 'react'
import { useNavigate } from 'react-router-dom'

const Notfound = () => {
    const navigate = useNavigate()
    const home = () =>{
        navigate('/')
    }
  return (
    <div>
    </div>
  )
}

export default Notfound
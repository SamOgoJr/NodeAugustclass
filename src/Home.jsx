import React from 'react'
import img from './green bird 2.jpg'

export const Home = () => {
    const mysty = {
      fontSize:"40px",
      color:"red"
    }

    // const showinput = () =>{
    //   setshowing(!showing)
    // }

  return (
    <div>
      <h1 style={mysty}>WELCOME HOME</h1>
      <p style={{color:"brown", fontSize:"60px" }}>REACT STYLE</p>
      <button className='btn btn-success'>Click</button>
      <i className='fa fa-eye'></i>
      <img src={img} alt="" />


      {/* <div>
        <input type= {showing? "text" :"password"} placeholder='Password'/> <br />
        <button onClick={showinput}>show/hide</button>
      </div> */}



    </div>
  )
}

export default Home
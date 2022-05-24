import React from 'react'
import Nav from './Nav'
import Homepage from '../Images/Home1.jpg'

const Home = () => {
  return (
    <>
    <Nav />
    <div style={{display:"flex", flexDirection: "row",justifyContent:"space-around" ,alignItems:"center", margin:"45px"}}>
    <img src={Homepage} alt='img' width="50%"/>
    <h1 style={{fontSize:"65px"}}>Home Page</h1>
    </div>
    </>
  )
}

export default Home
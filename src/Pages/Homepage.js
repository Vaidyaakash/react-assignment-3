import React from 'react';
import Nav from './Nav'
import poster from '../Images/Home1.jpg';

function Homepage() {
    return (
        <>
            <Nav />
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center", margin: "45px" }}>
                <img src={poster} alt='img' width="50%" />
                <h1 style={{ fontSize: "65px" }}>Home Page</h1>
            </div>
        </>

    )
}

export default Homepage
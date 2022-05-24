import React from 'react'
import Nav from './Nav'

const Contact = () => {
  return (
    <>
      <Nav />
      <h1 style={{margin:"1rem 4.6rem"}}>Contact Details</h1>
      <div className="contact">
        <section className="input_container">
          <label>First Name</label>
          <input type="text"/>
        </section>
        <section className="input_container">
          <label>Last Name</label>
          <input type="text"/>
        </section>
        <section className="input_container">
          <label>Mobile</label>
          <input type="number"/>
        </section>
        <section className="input_container">
          <label>Email</label>
          <input type="email"          />
        </section>
        <section >
          <label>Gender</label><br />
          <input type="radio" name='gender'/>Male
          <input type="radio" name='gender'/>Female
          <input type="radio" name='gender'/>Other
        </section>
        <section >
          <label>Interest</label><br />
          <input type="checkbox" />Cricket
          <input type="checkbox" />Hockey
          <input type="checkbox" />Football
        </section><br />
        <input type="submit" />
      </div>
    </>
  )
}

export default Contact

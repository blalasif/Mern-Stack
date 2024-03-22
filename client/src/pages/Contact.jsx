import React, { useState } from 'react'
import { useAuth } from '../store/auth'

import { toast } from 'react-toastify';

const defaultContactForm = {
  username: "", email: "", message: ""
}

const Contact = () => {
  const [contact, SetContact] = useState(defaultContactForm)



  const [userData, SetUserData] = useState(true)
  const { user } = useAuth()
  if (userData && user) {
    SetContact({
      username: user.username,
      email: user.email,
      message: ""
    })
    SetUserData(false)

  }

  const handleInput = (e) => {

    const name = e.target.name;
    const value = e.target.value;
    SetContact({
      ...contact,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const response = await fetch("http://localhost:7000/api/form/contact", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(contact)
      })

      if (response.ok) {
        SetContact(defaultContactForm)
        const data = await response.json();
        console.log(data);
        toast.success("Message Send Successfully")
      }



    } catch (error) {
      console.log(error);
    }

  }

  return (
    <>
      <section className='section-contact'>
        <div className="contact-content container">
          <h1 className='main-heading'>contact us</h1>

        </div>
        {/* contact page main  */}
        <div className='container grid grid-two-cols'>
          <div className="contact-img">
            <img src="/images/support.png" alt="Error in that image" />
          </div>
          {/* contact form actual  */}
          <section className="section-form">
            <form action="" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">username</label>
                <input type="text" placeholder='username' value={contact.username} onChange={handleInput} name="username" id="username" autoComplete='off' required />


              </div>
              <div>
                <label htmlFor="email">email</label>
                <input type="email" placeholder='email' value={contact.email} onChange={handleInput} name="email" id="email" autoComplete='off' required />


              </div>
              <div>
                <label htmlFor="message">message</label>
                <textarea placeholder='message' name="message" value={contact.message} onChange={handleInput} autoComplete='off' required id="message" cols="30" rows="5"></textarea>

              </div>

              <div>
                <button type='submit'>submit</button>
              </div>
            </form>

          </section>

        </div>
        <section className='mb-3'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.2864080806685!2d74.42141247438832!3d31.461306650059907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391909a15d835629%3A0xb7a491a2e394fd29!2sSwati%20Technologies!5e0!3m2!1sen!2s!4v1701669368831!5m2!1sen!2s"
            width="100%" height="400"
            allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">

          </iframe>
        </section>
      </section>
    </>
  )
}

export default Contact


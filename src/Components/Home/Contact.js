import React, { useRef, useState } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import { Typewriter } from 'react-simple-typewriter';

const Contact = () => {
  const formRef = useRef()
  const [done,setDone]=useState(false)
  const handleSubmit=e=>{
      e.preventDefault()
        emailjs.sendForm('service_axr6r9k', 
        'template_rcotpv7', 
        formRef.current, 'user_JIlGh4digYD-WjmJ7lTj1')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
  }
  return (
    <div className="contact mt-12">
      <h2 className="text-3xl text-center font-bold mb-16">
      <Typewriter
            words={['Lets Discuss Your Opinion']}
         
            cursor
            cursorStyle='_'
            typeSpeed={100}
            // deleteSpeed={50}
            // delaySpeed={1000}
          
          /> 
      </h2>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-rose-500">
            Contact now!</h1>
          <p className="py-6"></p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form ref={formRef}  onClick={handleSubmit}>
            <div className="form-control">
              <input
                type="text"
                placeholder="Name"
                name='user_name'
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder="Subject"
                name='user_subject'
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder="email"
                name='user_email'
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <textarea
                className="textarea textarea-bordered"
                name='messege'
                placeholder="Message"
              ></textarea>
              <label className="label"></label>
            </div>
            <div className="form-control mt-6">
              <button className="submit">Submit</button>
            </div>
          
            </form>
            {done && "thank you"}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

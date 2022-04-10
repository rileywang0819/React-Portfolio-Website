import React, { useRef } from 'react';
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import {AiFillWechat} from 'react-icons/ai'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6jmgia9', 'template_81v75dp', form.current, 'y_CMFuedUsLo2weHx')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>rileywang0819@gmail.com</h5>
            {/* <a href="mailto:rileywang0819@gmail.com" target='_blank'>Send a message</a> */}
          </article>

          <article className="contact__option">
            <BsFillChatDotsFill />
            <h4>LINE</h4>
            <h5>___</h5>
            <a href="">Send a message.</a>
          </article>

          <article className="contact__option">
            <AiFillWechat />
            <h4>WeChat</h4>
            <h5>___</h5>
            <a href="" target='_blank'>Send a message.</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}

        <form ref={form} onSubmit={sendEmail} target='_blank'>
          <input type="text" name='name' placeholder='Your Name' required />
          <input type="emial" name='email' placeholder='Your Email' required />
          <textarea name="message" cols="30" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'> Send Email</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
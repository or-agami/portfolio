import emailjs from '@emailjs/browser';
import { FormEvent, useRef, useState } from 'react';

export const ContactMe = () => {

  const form = useRef<HTMLFormElement>(null)
  const [formStatus, setFormStatus] = useState('CLEAN')

  const sendEmail = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('Sending Email')
    const formData = form.current
    setFormStatus('LOADING')
    emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID || '', process.env.REACT_APP_EMAILJS_TEMPLATE_ID || '', formData || '', process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
      .then((response) => {
        if (response.status === 200) setFormStatus('SUCCESS')
      }, (error) => {
        console.error('Cannot send email, please try again later', error.text)
      })
  };

  return (
    <section className="contact-me">
      <h1>Contact Me Works!</h1>
      {formStatus === 'CLEAN' ?
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="from_name" />
          <label>Email</label>
          <input type="email" name="from_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
        : formStatus === 'SUCCESS' ?
          <h1>Success!, Thank you</h1>
          : formStatus === 'LOADING' ?
            <h1>LOADING</h1>
            : <></>
      }
    </section>
  )
}
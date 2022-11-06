import emailjs from '@emailjs/browser';
import { DetailedHTMLProps, FormEvent, FormHTMLAttributes, useRef } from 'react';

export const ContactMe = () => {

  const form = useRef<any>();

  const sendEmail = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('sendEmail');
    
      emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID || '', process.env.REACT_APP_EMAILJS_TEMPLATE_ID || '', form.current, process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
  };

  return (
    <section className="contact-me">
      <h1>Contact Me Works!</h1>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="from_name" />
        <label>Email</label>
        <input type="email" name="from_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </section>
  )
}
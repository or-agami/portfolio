import emailjs from '@emailjs/browser';
import { FormEvent, useRef, useState } from 'react';
import { AiOutlineClose, AiOutlineSend } from 'react-icons/ai';
import { BsFillChatDotsFill } from 'react-icons/bs';

export const ContactMe = () => {

  const form = useRef<HTMLFormElement>(null)
  const [formStatus, setFormStatus] = useState('CLEAN')
  const [formModalOpen, setFormModalOpen] = useState(false)
  const [modalClosing, setModalClosing] = useState(false)

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

  const toggleModal = () => {
    if (formModalOpen) {
      setModalClosing(true)
      setTimeout(() => {
        setFormModalOpen(false)
        setModalClosing(false)
      }, 600);
    } else {
      setFormModalOpen(true)
    }
  }

  return (
    <>
      <div className="btn btn-contact-me-container">
        <button className={`btn btn-svg btn-contact-me ${formModalOpen ? 'open' : 'close'}`} onClick={toggleModal}>
          {formModalOpen ? <AiOutlineClose /> : <BsFillChatDotsFill />}
        </button>
      </div>
      {formModalOpen && true &&
        <section className="contact-me">
          {/* <h1 className="title">Contact Me</h1> */}
          <div className={`modal-container ${formModalOpen ? 'open' : ''} ${modalClosing ? 'out' : ''}`}
            onClick={toggleModal}>
            <div className="modal-background">
              <div className="modal" onClick={(ev) => ev.stopPropagation()}>
                <svg className="modal-svg" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="none">
                  <rect x="0" y="0" fill="none" width="100%" height="100%" rx="3" ry="3"></rect>
                </svg>
                {formStatus === 'CLEAN' ?
                  <>
                    <h1 className="title">Contact Me</h1>
                    <form className="flex-column form form-contact-me" ref={form} onSubmit={sendEmail}>
                      <label>Name</label>
                      <input type="text" name="from_name" placeholder="Full Name" />
                      <label>Email</label>
                      <input type="email" name="from_email" placeholder="email@example.com" />
                      <label>Message</label>
                      <textarea className="message" name="message" placeholder="Type here your message..." />
                      {/* <input className="submit" type="submit" value="Send" /> */}
                      <button className="btn btn-svg btn-submit" type="submit" title="Submit">
                        <AiOutlineSend />
                      </button>
                    </form>
                  </>
                  : formStatus === 'SUCCESS' ?
                    <h1>Success!, Thank you</h1>
                    : formStatus === 'LOADING' ?
                      <h1>LOADING</h1>
                      : <></>
                }
              </div>
            </div>
          </div>
          {/* {formStatus === 'CLEAN' ?
            <form className="flex-column form form-contact-me" ref={form} onSubmit={sendEmail}>
              <label>Name</label>
              <input type="text" name="from_name" />
              <label>Email</label>
              <input type="email" name="from_email" />
              <label>Message</label>
              <textarea className="message" name="message" />
              <input type="submit" value="Send" />
            </form>
            : formStatus === 'SUCCESS' ?
              <h1>Success!, Thank you</h1>
              : formStatus === 'LOADING' ?
                <h1>LOADING</h1>
                : <></>
          } */}
        </section>
      }
    </>
  )
}
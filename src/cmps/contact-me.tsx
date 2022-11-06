
export const ContactMe = () => {
console.log('process.env.REACT_APP_EMAILJS_KEY:', process.env.REACT_APP_EMAILJS_KEY)
const key = process.env.REACT_APP_EMAILJS_KEY
console.log('key:', key)
  return (
    <section className="contact-me">
      <h1>Contact Me Works!</h1>
    </section>
  )
}
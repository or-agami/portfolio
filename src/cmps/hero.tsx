import { Link } from "react-scroll"

export const Hero = () => {
  return (
    <div className="main-layout full hero-container" id="hero">
      <section className="main-layout hero">
        <div className="intro-text">
          <div className="intro-lead-in">Welcome To my Portfolio</div>
          <div className="intro-heading">It's Nice To Meet You</div>
          {/* <a className="btn" href="#services">Tell Me More</a> */}
          <Link className="btn" smooth offset={-68} to="specialties">Tell Me More</Link>
        </div>

        <p className="roboto">Roboto - Or Agami</p>
        <p className="roboto-light">Roboto-light - Or Agami</p>
        <p className="roboto-medium">Roboto-medium - Or Agami</p>
        <p className="roboto-bold">Roboto-bold - Or Agami</p>
        <p className="roboto-slab">roboto-slab - Or Agami</p>
        <p className="dancing-script">dancing-script - Or Agami</p>
      </section>
    </div>
  )
}
import { GrGithub, GrLinkedinOption, GrTwitter } from "react-icons/gr"

export const Hero = () => {
  return (
    <>
      <div className="main-layout full hero-container" id="hero">
        <section className="main-layout hero">
          <div className="intro">
            <h1 className="hello">Hello</h1>
            <div className="about">
              <h2 className="job-title">I'm a Full Stack</h2>
              <h2 className="highlight-text">Developer</h2>
              <p className="job-description">Frontend and Backend development mainly using MERN stack</p>
            </div>
            <div className="flex-column align-center follow-me">
              <h2 className="title">Follow Me</h2>
              <div className="spacer"></div>
              <a className="svg-link linkedin" href="https://linkedin.com/in/or-agami" target="_blank" rel="noreferrer" title="linkedin">
                <GrLinkedinOption />
              </a>
              <a className="svg-link github" href="https://github.com/or-agami" target="_blank" rel="noreferrer" title="github">
                <GrGithub />
              </a>
              <a className="svg-link twitter" href="https://twitter.com/or_agami" target="_blank" rel="noreferrer" title="twitter">
                <GrTwitter />
              </a>
            </div>
          </div>
        </section>

        <div className="main-layout full overflow-container">
          <div className="main-layout flex overflow">
            <div className="quote-container">
              <h4 className="author">
                Steve Jobs, co-founder of Apple, Inc.
              </h4>
              <h4 className="quote">
                "Design is not just what it looks like and feels like. Design is how it works."
              </h4>
            </div>
            <div className="img-container">
              <img className="hero-img" src={require('../assets/img/hero-img.png')} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* 
      <div className="main-layout full overflow-container">
        <div className="main-layout flex overflow">
          <div className="quote-container">
            <h4 className="author">
              Steve Jobs, co-founder of Apple, Inc.
            </h4>
            <h4 className="quote">
              "Design is not just what it looks like and feels like. Design is how it works."
            </h4>
          </div>
          <div className="img-container">
            <img className="hero-img" src={require('../assets/img/hero-img.png')} alt="" />
          </div>
        </div>
      </div> */}
    </>
  )
}
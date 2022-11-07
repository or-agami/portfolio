export const AboutMe = () => {

  return (
    <div className="main-layout full about-me-container" id="about-me">
      <section className="main-layout flex align-center about-me">
          <header className="header">
            <img className="profile-img" src={require('../assets/img/or-agami.jpg')} alt="Profile" />
            <h4>Or Agami</h4>
            <p className="text-muted">Full-Stack Developer</p>
          </header>
          <p className="about-description">
            Hey, I am an Maker and Full Stack developer. My focus is mainly on responsive and minimalistic web design,
            Other iterest include development of hardware and software for efficient and ergonomic workspace.
          </p>
      </section>
    </div>
  )
}
import { ProjectSwiper } from "./project-swiper";

export const Portfolio = () => {


  return (
    <div className="main-layout full portfolio-container" id="portfolio">
      <section className="main-layout flex-column portfolio">
        <header className="header">
          <h1 className="main-title">portfolio</h1>
          <h3 className="sub-title">Preview of recent projects</h3>
        </header>
        <ProjectSwiper />
      </section>
    </div>
  )
}
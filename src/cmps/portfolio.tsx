import { Project, projects } from "../data/project"


export const Portfolio = () => {

  return (
    <div className="main-layout full portfolio-container" id="portfolio">
      <section className="main-layout flex-column align-center portfolio">
        <header>
          <h1>portfolio</h1>
          <h3>Preview of recent projects</h3>
        </header>
        <div className="flex project-list">
          {projects.map((project: Project) =>
            <ProjectPreview project={project} />
          )}
        </div>
      </section>
    </div>
  )
}

const ProjectPreview = ({project}: {project: Project}) => {
  return (
    <article key={project.id} className="project-preview">
      <img src={``} alt="" />
      <h1>{project.name}</h1>
    </article>
  )
}
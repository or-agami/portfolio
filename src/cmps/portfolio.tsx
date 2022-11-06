import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Project, projects } from "../data/project"
import { ProjectDetails } from "./project-details";


export const Portfolio = () => {

  const [projectOpen, setProject] = useState<Project | null>(null)

  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  // useEffect(() => {
  //   (projectOpen) ?
  //     document.body.style.overflow = 'hidden' :
  //     document.body.style.removeProperty('overflow')
  // }, [projectOpen])

  return (
    <>
      <div className="main-layout full portfolio-container" id="portfolio">
        <section className="main-layout flex-column align-center portfolio">
          <header>
            <h1>portfolio</h1>
            <h3>Preview of recent projects</h3>
          </header>
          <div className={`flex project-list ${inView ? 'visible' : 'invisible'}`} ref={ref}>
            {projects.map((project: Project) =>
              <ProjectPreview key={project.id} project={project} onSetProject={setProject} />
            )}
          </div>
        </section>
      </div>
      {projectOpen && <ProjectDetails project={projectOpen} onClose={() => setProject(null)} />}
    </>
  )
}

const ProjectPreview = ({ project, onSetProject }: { project: Project, onSetProject: Dispatch<SetStateAction<Project | null>> }) => {
  return (
    <article key={project.id} className="project-preview" onClick={() => onSetProject(project)}>
      <img src={require(`../assets/img/portfolio/${project.id}-thumbnail.png`)} alt="" />
      <h1>{project.name}</h1>
      <h4>{project.category}</h4>
    </article>
  )
}
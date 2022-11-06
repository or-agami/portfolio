import { Dispatch, SetStateAction } from "react"
import { Project } from "../data/project"

export const ProjectDetails = ({ project, onClose }: { project: Project, onClose: Dispatch<SetStateAction<null>> }) => {

  return (
    <div className="mask" onClick={() => onClose(null)}>
      <article className="project-details">
        <main className="main-details">
          <button onClick={() => onClose(null)}>X</button>
          <h1>Project Details Works!</h1>
          <h1>{project.name}</h1>
        </main>
      </article>
    </div>
  )
}
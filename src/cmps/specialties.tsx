import { useInView } from "react-intersection-observer";
import { skills, specialties } from "../data/skills.const";

export const Specialties = () => {

  const { ref: specialtiesRef, inView: specialtiesInView } = useInView({
    threshold: .5,
  })

  const { ref: skillsRef, inView: skillsInView } = useInView({
    threshold: 1,
  })

  return (
    <div className="main-layout full specialties-container" id="specialties">
      <section className="main-layout flex-column align-center specialties">
        <h1 className="main-title">specialties</h1>
        <div className={`flex specialties-list ${specialtiesInView ? 'visible' : 'invisible'}`} ref={specialtiesRef}>
          {specialties.map((specialty, idx) =>
            <article key={idx} className="flex-column justify-center align-center specialty">
              <div className="icon"><specialty.Icon /></div>
              <h1 className="title">
                {specialty.title}
              </h1>
              <p className="description">
                {specialty.description}
              </p>
            </article>
          )}
        </div>
        <ul className={`flex-column skill-list ${skillsInView ? 'visible' : 'invisible'}`} ref={skillsRef}>
          {skills.map((skill, idx) =>
            <li className="flex align-center skill" key={idx}>
              <h3 className="title">{skill.title}</h3>
              <div className="score-container">
                <div className="score" style={{ width: `${skill.score * 10}%` }}></div>
              </div>
            </li>
          )}
        </ul>
      </section>
    </div>
  )
}
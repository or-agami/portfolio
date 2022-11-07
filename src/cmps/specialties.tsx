import { BsLaptop } from "react-icons/bs"
import { useInView } from "react-intersection-observer";

export const Specialties = () => {

  const { ref, inView } = useInView({
    threshold: 1,
  })

  return (
    <div className="main-layout full specialties-container" id="specialties">
      <section className="main-layout flex-column align-center specialties">
        <h1 className="main-title">specialties</h1>
        <div className={`flex justify-center specialties-list ${inView ? 'visible' : 'invisible'}`} ref={ref}>
          {specialties.map((specialty, idx) =>
            <article key={idx} className="flex-column align-center specialty">
              <div className="icon">{specialty.img}</div>
              <h1 className="title">
                {specialty.title}
              </h1>
              <p className="description">
                {specialty.description}
              </p>
            </article>
          )}
        </div>
      </section>
    </div>
  )
}

const specialties = [
  {
    img: <BsLaptop />,
    title: 'Responsive Design',
    description: 'Full Stack development with responsive design in mind, one website for all devices without compromise',
  },
  {
    img: <BsLaptop />,
    title: 'Responsive Design',
    description: 'Full Stack development with responsive design in mind, one website for all devices without compromise',
  },
  {
    img: <BsLaptop />,
    title: 'Responsive Design',
    description: 'Full Stack development with responsive design in mind, one website for all devices without compromise',
  },
]
import { BsLaptop } from "react-icons/bs"

export const Specialties = () => {

  return (
    <div className="main-layout full specialties-container" id="specialties">
      <section className="main-layout flex justify-center specialties">
        {specialties.map((specialty, idx) =>
          <article key={idx} className="flex-column align-center specialty">
            <header>{specialty.img}</header>
            <h1 className="title">
              {specialty.title}
            </h1>
            <p className="description">
              {specialty.description}
            </p>
          </article>
        )}
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
import { BsFillLightningFill, BsLaptop, BsStack } from "react-icons/bs"
import { useInView } from "react-intersection-observer";

export const Specialties = () => {

  const { ref, inView } = useInView({
    threshold: 1,
  })

  return (
    <div className="main-layout full specialties-container" id="specialties">
      <section className="main-layout flex-column align-center specialties">
        <h1 className="main-title">specialties</h1>
        <div className={`flex specialties-list ${inView ? 'visible' : 'invisible'}`} ref={ref}>
          {specialties.map((specialty, idx) =>
            <article key={idx} className="flex-column justify-center align-center specialty">
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
        <p className="font-test roboto">Roboto - Or Agami</p>
        <p className="font-test roboto-light">Roboto-light - Or Agami</p>
        <p className="font-test roboto-medium">Roboto-medium - Or Agami</p>
        <p className="font-test roboto-bold">Roboto-bold - Or Agami</p>
        <p className="font-test roboto-slab">roboto-slab - Or Agami</p>
        <p className="font-test dancing-script">dancing-script - Or Agami</p>
      </section>
    </div>
  )
}

const specialties = [
  {
    img: <BsFillLightningFill />,
    title: 'Blazing Fast',
    description: 'Optimization, performance and great UX/UI is high priority for me',
  },
  {
    img: <BsLaptop />,
    title: 'Responsive Design',
    description: 'Development with responsive design in mind, one code for all devices',
  },
  {
    img: <BsStack />,
    title: 'Full Stack',
    description: 'From backend to frontend, Easy and optimized app ready for deployment',
  },
]
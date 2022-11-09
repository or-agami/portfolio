import { Project, projects } from "../data/project.const";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export const ProjectSwiper = () => {
  
  return (
    <div className="project-swiper">
      <h1>Portfolio Preview Works!</h1>
      <Swiper modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        rewind={true}
        autoplay={{ pauseOnMouseEnter: true, disableOnInteraction: false }}
      >
        {projects.map((project: Project) =>
          <SwiperSlide>
            <ProjectPreview key={project.id} project={project} />
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  )
}

const ProjectPreview = ({ project }: { project: Project }) => {

  return (
    <article key={project.id} className="project-preview">
      <img src={require(`../assets/img/portfolio/${project.id}-thumbnail.png`)} alt="" />
      <h1>{project.name}</h1>
      <h4>{project.category}</h4>
    </article>
  )
}
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Project, projects } from "../data/project.const";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { BiLinkExternal } from "react-icons/bi";
import { AiFillTag } from "react-icons/ai";

export const ProjectSwiper = () => {

  return (
    <div className="project-swiper">
      {/* <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]} */}
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
      <header className="flex align-center justify-center project-header">
        <h1 className="title">{project.title} </h1>
        <a className="url" href={project.url} target="_blank" rel="noreferrer"><BiLinkExternal /></a>
      </header>
      <div className="flex details">
        <div className="thumbnail">
          <img src={require(`../assets/img/portfolio/${project.id}-thumbnail.png`)} alt="" />
        </div>
        <div className="flex-column info">
          <h2 className="subtitle">{project.subtitle}</h2>
          <h4 className="category">Category: <span>{project.category}</span></h4>
          {/* <p className="description">{project.desc}</p> */}
          <ul className="flex tag-list">
            {project.tags.map((tag, idx) =>
              <li className="flex align-center tag" key={idx}>
                <span className="icon"><AiFillTag /></span>
                {tag}
              </li>
            )}
          </ul>
        </div>
      </div>
    </article>
  )
}
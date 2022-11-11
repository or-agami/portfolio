import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Project, projects } from "../data/project.const";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { BiLinkExternal } from "react-icons/bi";
import { AiFillTag } from "react-icons/ai";
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

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
          <SwiperSlide key={project.id}>
            <ProjectPreview project={project} />
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  )
}

const ProjectPreview = ({ project }: { project: Project }) => {

  const { ref, inView } = useInView({
    threshold: 1,
  })

  const [thumbnail, setThumbnail] = useState(project.thumbnail)

  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [isDescOpen, setDescOpen] = useState(false)

  useEffect(() => {
    inView ? handleInView() : handleNotInView()
  }, [inView])

  const handleInView = () => {
    if (videoRef.current) videoRef.current.play()
  }

  const handleNotInView = () => {
    if (isDescOpen) setDescOpen(false)
    if (videoRef.current) videoRef.current.pause()
  }

  const changeThumbnail = (snapshot: string) => {
    setThumbnail({ type: 'image', name: snapshot })
  }

  const setDefaultThumbnail = () => {
    setThumbnail(project.thumbnail)
    setTimeout(handleInView, 100)
  }

  return (
    <article key={project.id} className="project-preview" ref={ref} onClick={handleInView}>
      <header className="flex align-center justify-center project-header">
        <div className="title-container">
          <h1 className="title">{project.title} </h1>
          <h4 className="subtitle">{project.subtitle} </h4>
        </div>
        <a className="url" href={project.url} target="_blank" rel="noreferrer"><BiLinkExternal /></a>
      </header>
      <div className="flex details">
        <div className="thumbnail">
          {thumbnail.type === 'video' ?
            <div className="phone-thumbnail">
              <video src={require(`../assets/video/${project.id}/${project.thumbnail.name}.mp4`)} loop ref={videoRef}></video>
              <img src={require(`../assets/img/iPhone-14-frame.png`)} alt="" />
            </div>
            : thumbnail.type === 'image' &&
            <img className="img-thumbnail" src={require(`../assets/img/portfolio/${project.id}/${thumbnail.name}.png`)} alt={thumbnail.name} title={thumbnail.name} />
          }
        </div>
        <div className="flex-column info">
          {isDescOpen ?
            <div className="description">
              <p>{project.desc}</p>
            </div>
            :
            <div className="snapshots" onMouseLeave={() => setDefaultThumbnail()}>
              {project.snapshots.map((snapshot, idx) =>
                <img className={thumbnail.name === snapshot ? 'active' : ''} alt={snapshot} title={snapshot} key={idx}
                  src={require(`../assets/img/portfolio/${project.id}/${snapshot}.png`)}
                  onMouseEnter={() => changeThumbnail(snapshot)} />
              )}
            </div>}
          <button className={`btn ${isDescOpen ? 'close' : 'read-more'}`} onClick={() => setDescOpen(!isDescOpen)}>
            {isDescOpen ? 'Close' : 'Read More'}
          </button>
          <h4 className="category">Category: <span>{project.category}</span></h4>
          <ul className="flex tag-list">
            {project.tags.map((tag, idx) =>
              <li className="flex align-center tag" key={idx}>
                <span className="icon"><AiFillTag /></span>
                <p>{tag}</p>
              </li>
            )}
          </ul>
        </div>
      </div>
    </article>
  )
}
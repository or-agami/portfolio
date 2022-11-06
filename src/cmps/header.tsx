import { useEffect, useState } from "react"
import { Link, animateScroll as scroll } from "react-scroll"

export const Header = () => {

  const [pageOnTop, setPageOnTop] = useState(true)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  const handleScroll = () => {
    if (window.scrollY > 30 && pageOnTop) setPageOnTop(false)
    if (window.scrollY < 30 && !pageOnTop) setPageOnTop(true)
  }

  const handleActive = (activeLink: string) => {
    console.log('activeLink:', activeLink)
    window.history.pushState(null,'', '#' + activeLink)
  }

  return (
    <div className={`main-layout full app-header-container ${!pageOnTop ? 'scroll' : ''}`}>
      <header className={`main-layout flex space-between app-header ${!pageOnTop ? 'scroll' : ''}`}>
        <a className={`nav-link navbar-brand ${pageOnTop ? 'active' : ''}`} onClick={() => scroll.scrollToTop()}>Or Agami</a>
        {/* <a className="navbar-brand" href="#">Or Agami</a> */}
        <nav className="flex justify-center align-center nav-btns">
          <Link className="nav-link" activeClass="active" offset={-68} smooth spy hashSpy to="specialties">Specialties</Link>
          <Link className="nav-link" activeClass="active" offset={-68} smooth spy hashSpy to="portfolio">Portfolio</Link>
          <Link className="nav-link" activeClass="active" offset={-68} smooth spy hashSpy to="about-me">Me</Link>
          {/* <Link className="nav-link" activeClass="active" offset={-68} smooth spy onSetActive={handleActive} to="specialties">Specialties</Link>
          <Link className="nav-link" activeClass="active" offset={-68} smooth spy onSetActive={handleActive} to="portfolio">Portfolio</Link>
          <Link className="nav-link" activeClass="active" offset={-68} smooth spy onSetActive={handleActive} to="about-me">Me</Link> */}
        </nav>
      </header>
    </div>
  )
}
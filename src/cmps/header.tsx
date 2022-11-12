import { useEffect, useState } from "react"
import { Link, animateScroll as scroll } from "react-scroll"
import { MainLogo } from "../lib/main-logo"

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

  return (
    <div className={`main-layout full app-header-container ${!pageOnTop ? 'scroll' : ''}`}>
      <header className={`main-layout flex space-between app-header ${!pageOnTop ? 'scroll' : ''}`}>
        <button className={`nav-link btn logo-btn ${pageOnTop ? 'active' : ''}`} onClick={() => scroll.scrollToTop()}>
          <MainLogo />
        </button>
        <nav className="flex justify-center align-center nav-btns">
          <Link className="nav-link" activeClass="active" offset={-60} smooth spy hashSpy to="specialties">Specialties</Link>
          <Link className="nav-link" activeClass="active" offset={-60} smooth spy hashSpy to="portfolio">Portfolio</Link>
          <Link className="nav-link" activeClass="active" offset={-60} smooth spy hashSpy to="about-me">Me</Link>
        </nav>
      </header>
    </div>
  )
}
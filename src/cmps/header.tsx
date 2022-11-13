import { useEffect, useState } from "react"
import { Link, animateScroll as scroll } from "react-scroll"
import { MainLogo } from "../lib/main-logo"
import { CgMenuRight } from "react-icons/cg"

export const Header = () => {

  const [pageOnTop, setPageOnTop] = useState(true)
  const [isNavOpen, setNavOpen] = useState(false)
  // const windowWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  const handleScroll = () => {
    if (window.scrollY > 30 && pageOnTop) setPageOnTop(false)
    if (window.scrollY < 30 && !pageOnTop) setPageOnTop(true)
  }

  const toggleNav = () => {
    setNavOpen(!isNavOpen)
  }

  return (
    <div className={`main-layout full app-header-container ${!pageOnTop ? 'scroll' : ''}`}>
      <header className={`main-layout flex space-between app-header ${!pageOnTop ? 'scroll' : ''}`}>
        <button className={`nav-link btn logo-btn ${pageOnTop ? 'active' : ''}`} onClick={() => scroll.scrollToTop()}>
          <MainLogo />
        </button>
        <button className={"btn btn-svg hamburger" + (isNavOpen ? ' open' : '')} onClick={toggleNav}>
          <CgMenuRight />
        </button>
        <nav className={"flex justify-center align-center nav-btns" + (isNavOpen ? ' open' : '')}>
          <Link className="nav-link" activeClass="active" offset={-58} smooth spy hashSpy to="specialties" onClick={() => setNavOpen(false)}>
            Specialties
          </Link>
          <Link className="nav-link" activeClass="active" offset={-58} smooth spy hashSpy to="portfolio" onClick={() => setNavOpen(false)}>
            Portfolio
          </Link>
          <Link className="nav-link" activeClass="active" offset={-58} smooth spy hashSpy to="about-me" onClick={() => setNavOpen(false)}>
            Me
          </Link>
        </nav>
      </header>
    </div>
  )
}
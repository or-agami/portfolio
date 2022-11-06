import { useEffect, useState } from "react"
import { Link } from "react-scroll"

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
      <header className={`main-layout app-header ${!pageOnTop ? 'scroll' : ''}`}>
        <a className="navbar-brand" href="#">Or Agami</a>
        <nav className="nav-btns">
          <a className="nav-link" href="#services">Specialities</a>
          <Link className="nav-link" activeClass="active" smooth spy to="services">Specialities</Link>
          <a className="nav-link" href="#portfolio">Portfolio</a>
          <a className="nav-link" href="#me">Me</a>
        </nav>
      </header>
    </div>
  )
}
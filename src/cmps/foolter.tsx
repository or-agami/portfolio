import { GrGithub, GrLinkedinOption, GrTwitter } from 'react-icons/gr'
import { MainLogo } from "../lib/main-logo"
export const Footer = () => {

  return (
    <footer>
      <div className="main-layout full footer-container">
        <div className="main-layout flex space-around align-center footer">
          <div className="social-network">
            <h3>Find me on</h3>
            <ul className="flex align-center links">
              <li>
                <a className="svg-link linkedin" href="https://linkedin.com/in/or-agami" target="_blank" rel="noreferrer" title="linkedin">
                  <GrLinkedinOption />
                </a>
              </li>
              <li>
                <a className="svg-link github" href="https://github.com/or-agami" target="_blank" rel="noreferrer" title="github">
                  <GrGithub />
                </a>
              </li>
              <li>
                <a className="svg-link twitter" href="https://twitter.com/or_agami" target="_blank" rel="noreferrer" title="twitter">
                  <GrTwitter />
                </a>
              </li>
            </ul>
          </div>
          <span className="copyright">Copyright (c) 2022 Or Agami</span>
        </div>
      </div>
    </footer>
  )
}
export const Footer = () => {

  return (
    <footer>
      <div className="main-layout full footer-container">
        <div className="main-layout flex space-around align-center footer">
          <div className="col-md-4">
            <a href="https://github.com/or-agami" target="_blank">
              {/* <img className="brand-logo" src="./img/or-agami-resized-logo.svg" alt=""> */}
              Or Agami
            </a>
          </div>
          <ul className="flex space-between align-center">
            <li className="">
              <a href="https://github.com/or-agami" target="_blank">
                Github
              </a>
            </li>
            <li className="">
              <a href="https://facebook.com/profile.php?id=100008503151592" target="_blank">
                facebook
              </a>
            </li>
            <li className="">
              <a href="https://linkedin.com/in/or-agami-56567a206/" target="_blank">
                Linkedin
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
import { useInView } from "react-intersection-observer"

export const AboutMe = () => {

  const { ref, inView } = useInView({
    threshold: 1,
  })

  return (
    <div className="main-layout full about-me-container" id="about-me">
      <section className="main-layout flex-column align-center about-me">
        <h1 className="main-title">about me</h1>
        <div className="flex align-center content-container">
          <img className="profile-img" src={require('../assets/img/or-agami.jpg')} alt="Profile" />
          <p className="description">
            Hey, I am an Full Stack developer. My focus is mainly on feature rich apps, responsive and minimalist web design with amazing UX,
            Other interest include development of hardware and software for efficient and ergonomic workspace.
          </p>
        </div>
        <div className={`flex align-center justify-center software ${inView ? 'visible' : 'invisible'}`} ref={ref}>
          <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer" title="HTML">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40" />
          </a>
          <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer" title="CSS">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40" />
          </a>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer" title="JavaScript">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40" />
          </a>
          <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer" title="TypeScript">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40" />
          </a>
          <a href="https://sass-lang.com" target="_blank" rel="noreferrer" title="SASS">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="sass" width="40" height="40" />
          </a>
          <a href="https://angular.io" target="_blank" rel="noreferrer" title="Angular">
            <img src="https://angular.io/assets/images/logos/angular/angular.svg" alt="angular" width="40" height="40" />
          </a>
          <a href="https://vuejs.org/" target="_blank" rel="noreferrer" title="Vue">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg" alt="vuejs" width="40" height="40" />
          </a>
          <a href="https://reactjs.org/" target="_blank" rel="noreferrer" title="React">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40" />
          </a>
          <a href="https://redux.js.org" target="_blank" rel="noreferrer" title="Redux">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" width="40" height="40" />
          </a>
          <a href="https://svelte.dev" target="_blank" rel="noreferrer" title="Svelte">
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg" alt="svelte" width="40" height="40" />
          </a>
          <a href="https://nodejs.org" target="_blank" rel="noreferrer" title="NodeJS">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40" />
          </a>
          <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer" title="MongoDB">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40" />
          </a>
          <a className="white-bg" href="https://expressjs.com" target="_blank" rel="noreferrer" title="ExpressJS">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40" />
          </a>
          <a href="https://appwrite.io" target="_blank" rel="noreferrer" title="AppWrite">
            <img src="https://www.vectorlogo.zone/logos/appwriteio/appwriteio-icon.svg" alt="appwrite" width="40" height="40" />
          </a>
          <a href="https://www.docker.com/" target="_blank" rel="noreferrer" title="Docker">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" alt="docker" width="40" height="40" />
          </a>
          <a href="https://git-scm.com/" target="_blank" rel="noreferrer" title="Git">
            <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40" />
          </a>
          <a href="https://www.linux.org/" target="_blank" rel="noreferrer" title="Linux">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="linux" width="40" height="40" />
          </a>
          <a href="https://www.nginx.com" target="_blank" rel="noreferrer" title="Nginx">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nginx/nginx-original.svg" alt="nginx" width="40" height="40" />
          </a>
          <a href="https://www.figma.com/" target="_blank" rel="noreferrer" title="Figma">
            <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width="40" height="40" />
          </a>
          <a className="white-bg" href="https://www.gnu.org/software/bash/" target="_blank" rel="noreferrer" title="Bash">
            <img src="https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg" alt="bash" width="40" height="40" />
          </a>
          <a href="https://www.chartjs.org" target="_blank" rel="noreferrer" title="ChartJS">
            <img src="https://www.chartjs.org/media/logo-title.svg" alt="chartjs" width="40" height="40" />
          </a>
        </div>
      </section>
    </div>
  )
}
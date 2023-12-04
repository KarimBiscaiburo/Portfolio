import Nav from "./components/Nav";
import "./styles/app.css";

// ICONS
import linkIcon from "./img/link.svg";
import externalLink from "./img/external-link.svg";

// IMAGES
import meImage from "./img/me.jpg";

// LOGOS
import githubLogo from "./img/github-logo.png";
import reactLogo from "./img/react-logo.png";
import javascriptLogo from "./img/javascript-logo.png";
import htmlLogo from "./img/html-logo.png";
import cssLogo from "./img/css-logo.png";
import mysqlLogo from "./img/mysql-logo.png";
import sassLogo from "./img/sass-logo.png";
import nextjsLogo from "./img/nextjs-logo.png";
import nodeLogo from "./img/node-logo.png";
import gitLogo from "./img/git-logo.png";
import figmaLogo from "./img/figma-logo.png";

// COMPONENTS
import Studies from "./components/Studies";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import AboutMe from "./components/AboutMe";

function App() {

  return (
    <> 
      <Nav />
      
      <main className="main">

        <section className="section" id="home">
          <div className="home-section">

            <img src={meImage} alt="me-image" className="me-image"/>

            <div className="home-text"> 
              <h1>Karim Biscaiburo</h1>
              <p>Desarrollador Full Stack</p>
            </div>
          </div>
        </section>

        <AboutMe />

        <Studies />

        <Experience />

        <section className="section" id="skills">
          <h2>Habilidades</h2>

          <div className="list-skill-logos">
            <img src={htmlLogo} alt="html-logo" className="skill-logo"/>
            <img src={cssLogo} alt="css-logo" className="skill-logo"/>
            <img src={javascriptLogo} alt="javascript-logo" className="skill-logo"/>
            <img src={sassLogo} alt="sass-logo" className="skill-logo"/>
            <img src={reactLogo} alt="react-logo" className="skill-logo"/>
            <img src={nextjsLogo} alt="nextjs-logo" className="skill-logo"/>
            <img src={mysqlLogo} alt="mysql-logo" className="skill-logo"/>
            <img src={nodeLogo} alt="node-logo" className="skill-logo"/>
            <img src={githubLogo} alt="github-logo" className="skill-logo"/>
            <img src={gitLogo} alt="git-logo" className="skill-logo"/>  
            <img src={figmaLogo} alt="figma-logo" className="skill-logo"/>
          </div>
        </section>

        <section className="section" id="projects">
          <h2>Proyectos</h2>

          <div className="project">

            <div className="img-and-details">
              <img src="" alt="" />

              <div className="project-details">
                <h4>Turnos Peluqueria</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae necessitatibus dolorum est deserunt cumque qui repellat. Illum exercitationem numquam a eligendi vero nulla neque, magnam, adipisci eius quisquam ad optio? Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim distinctio quod perferendis velit quibusdam animi illum. Excepturi exercitationem, et sapiente adipisci ratione, odit, impedit recusandae quasi illo distinctio eveniet quo. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi consequuntur.</p>
              </div>
            </div>

            <div className="stack-and-links">

              <div className="stack">
                <img src={nextjsLogo} alt="nextjs-logo" className="logo"/>
                <img src={javascriptLogo} alt="javascript-logo" className="logo"/>
                <img src={mysqlLogo} alt="mysql-logo" className="logo"/>
              </div>

              <div className="links">

                <button>
                  <p>Ver Detalles</p>
                  <img src={linkIcon} alt="link-icon" />
                </button>

                <button>
                  <p>Ver Repositorio</p>
                  <img src={githubLogo} alt="github-logo" />
                </button>

              </div>
            </div>
          </div>
          <div className="project">

            <div className="img-and-details">
              <img src="" alt="" />

              <div className="project-details">
                <h4>Bienes Raices</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae necessitatibus dolorum est deserunt cumque qui repellat. Illum exercitationem numquam a eligendi vero nulla neque, magnam, adipisci eius quisquam ad optio? Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim distinctio quod perferendis velit quibusdam animi illum. Excepturi exercitationem, et sapiente adipisci ratione, odit, impedit recusandae quasi illo distinctio eveniet quo. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi consequuntur.</p>
              </div>
            </div>

            <div className="stack-and-links">

              <div className="stack">
                <img src={reactLogo} alt="react-logo" className="logo"/>
                <img src={javascriptLogo} alt="javascript-logo" className="logo"/>
                <img src={sassLogo} alt="sass-logo" className="logo"/>
                <img src={nodeLogo} alt="node-logo" className="logo"/>
                <img src={mysqlLogo} alt="mysql-logo" className="logo"/>
              </div>

              <div className="links">

                <button className="project-link-details">
                  <p>Ver Detalles</p>
                  <img src={linkIcon} alt="link-icon" className=""/>
                </button>

                <button className="project-link-github">
                  <p>Ver Repositorio</p>
                  <img src={githubLogo} alt="github-logo" />
                </button>

              </div>
            </div>
          </div>
        </section>

        <section className="section" id="technical-test">
          <h2>Pruebas Técnicas</h2>

          <div className="technical-test-section">
            <div className="technical-test-section__row">
              <div className="test">

                <div className="test-details">
                  <div>
                    <h4>Prueba Tecnica</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, exercitationem earum reiciendis possimus saepe voluptatum tempore repellendus autem aliquam cumque adipisci quaerat et blanditiis doloremque iste, non, laborum voluptas incidunt!</p>
                  </div>

                  <div className="test-details__stack">
                    <img src={reactLogo} alt="react-logo" />
                  </div>
                </div>

                <div className="test-links">
                  <button>
                    <p>Ver Página</p>
                    <img src={externalLink} alt="external-link" />
                  </button>
                  <button>
                    <p>Ver Repositorio</p>
                    <img src={githubLogo} alt="github-logo"/>
                  </button>
                </div>
              </div>

              <div className="test">

              <div className="test-details">
                  <div>
                    <h4>Prueba Tecnica</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, exercitationem earum reiciendis possimus saepe voluptatum tempore repellendus autem aliquam cumque adipisci quaerat et blanditiis doloremque iste, non, laborum voluptas incidunt!</p>
                  </div>

                  <div className="test-details__stack">
                    <img src={reactLogo} alt="react-logo" />
                  </div>
                </div>

                <div className="test-links">
                  <button>
                    <p>Ver Página</p>
                    <img src={externalLink} alt="external-link" />
                  </button>
                  <button>
                    <p>Ver Repositorio</p>
                    <img src={githubLogo} alt="github-logo"/>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
        </section>

        <Contact />

      </main>
    </>
  )
}

export default App

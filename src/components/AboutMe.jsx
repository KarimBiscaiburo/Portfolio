import "../styles/about-me.css"

// LOGOS
import economyLogo from "../img/economy-logo.png";
import financeLogo from "../img/finance-logo.png";
import personalDevelopmentLogo from "../img/personal-development-logo.png";
import healthLogo from "../img/health-logo.png";

export default function AboutMe() {
    return (
        <section className="section section-aboutme" id="about-me">
            <h2>Sobre Mi</h2>

            <p>Mi interes por la programacion inicio durante la pandemia por lo que parte de mi tiempo, ademas de
            estar terminando la secundaria, lo dedicaba a aprender sobre este mundo. Al iniciar la universidad 
            decidi hacer una tecnicatura en programacion la cual posteriormente deje para seguir estudiando de
            forma autodidacta, dado que necesitaba la flexibilidad para estudiar cuando pudiera.</p>

            <p>Me encanta hacer paginas webs, desde diseñar el formato, hasta hacer las funcionalidades y 
            conexiones con la base de datos. Tambien me gusta aprender cosas nuevas todos los dias, que me 
            aporten un valor prefesional o personal, por este motivo es que me interesa poner en practica 
            mis conocimientos realizando pruebas tecnicas o haciendo proyectos.</p>

            <p>A su vez, el desarrollo personal es un area que me gusta construir dia a dia, por lo que me pongo
            metas y limites para cumplir mis objetivos.</p>

            <p>Soy de Argentina y quiero aplicar mis conocimientos trabajando de manera profesional en
            esto que me apasiona</p>

            <h3>Otros Intereses</h3>

            <div className="other-interests">
                <div className="interest">
                    <img src={economyLogo} alt="economy-logo" />
                    <p>Economía</p>
                </div>

                <div className="interest">
                    <img src={financeLogo} alt="finance-logo    " />
                    <p>Finanzas</p>
                </div>

                <div className="interest">
                    <img src={personalDevelopmentLogo} alt="personal-development-logo" />
                    <p>Desarrollo Personal</p>
                </div>

                <div className="interest">
                    <img src={healthLogo} alt="health-logo" />
                    <p>Salud</p>
                </div>
            </div>
        </section>
    )
}
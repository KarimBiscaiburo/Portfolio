import "../styles/experience.css";

// LOGOS
import pdfIcon from "../img/pdf-icon.png";

// CARD
import Experience_Card from "./Experience_Card";

export default function Experience() {
    return (
        <section className="section" id="experience">
            <h2>Experiencia</h2>

            <Experience_Card 
                title={"Desarrollo Freelance"}
                subtitle={"Turnos para Peluqueria"}
                period={"Junio 2023 - Septiembre 2023"}
                description={"Una página creada por mí de principio a fin para un cliente que finalmente decidió no utilizarla, por lo que no está publicada. Incluye envíos de correo electrónico por cancelación, aceptación o reprogramación de turnos, conexión con una base de datos, usuario administrativo, reserva de horarios ocupados, etc."}
            />

            <Experience_Card 
                title={"Proyectos Personales"}
                subtitle={"Desarrollos para Ganar Experiencia"}
                period={"2021 - Actualidad"}
                description={"Estos proyectos son de los cursos que fui realizando, otros son de videos que encontré en YouTube y otros fueron ideas propias. Cabe destacar que algunos de estos no son iguales a los originales, ya que quise agregarles dificultad al hacerlos con otras tecnologías o formatos."}
            />

            <div className="experience-links">
                <button className="download-cv">
                    <p>Descargar CV</p>
                    <img src={pdfIcon} alt="pdf-icon"/>
                </button>
                
                <button className="linkedin">
                    <p>Linkedin</p>
                </button>
            </div>
        </section>
    )
}
import "../styles/studies.css";

// IMAGES
import imgCourseJS from "../img/JavaScript-Moderno-Guía-Definitiva-Construye-20-Proyectos.png";
import imgCourseWeb from "../img/Desarrollo-Web-Completo-con-HTML5-CSS3-JS-AJAX-PHP-MySQL.png";
import imgCourseOfReact from "../img/Curso-de-React-2023.png";
import imgCollegeDegreeInProgramming from "../img/Tecnicatura-en-Programacion.png";

// LOGOS
import CLogo from "../img/C-logo.png";
import phpLogo from "../img/php-logo.png";
import reactLogo from "../img/react-logo.png";
import javascriptLogo from "../img/javascript-logo.png";
import htmlLogo from "../img/html-logo.png";
import cssLogo from "../img/css-logo.png";
import mysqlLogo from "../img/mysql-logo.png";

// CARD
import Studies_Card from "./Studies_Card";

export default function Studies() {

    return (
        <section className="section" id="studies">
          <h2>Estudios</h2>

          <Studies_Card 
            place={"UTN - Mar del Plata"}
            career={"Tecnicatura en Programación"}
            period={"2021 - 2021"}
            description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dignissimos enim officia laborum cupiditate quam, deleniti ipsum iste repellat ea provident voluptas eligendi eius laudantium eos sed error, quis id. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita numquam a, deleniti molestiae laborum beatae veniam odit accusamus culpa aut et ut assumenda quas? Est ad similique alias dolorum ab?"}
            techStackArray={[{src: CLogo, alt: "C-logo"}]}
            img={imgCollegeDegreeInProgramming}
            imgUrl={"https://mdp.utn.edu.ar/tecnicatura/tecnico_universitario_en_programacion/"}
          />

          <Studies_Card 
            place={"Youtube"}
            career={"Curso de React"}
            period={"Midudev"}
            description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dignissimos enim officia laborum cupiditate quam, deleniti ipsum iste repellat ea provident voluptas eligendi eius laudantium eos sed error, quis id. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita numquam a, deleniti molestiae laborum beatae veniam odit accusamus culpa aut et ut assumenda quas? Est ad similique alias dolorum ab?"}
            techStackArray={
              [
                {src: javascriptLogo, alt: "javascript-logo"},
                {src: reactLogo, alt: "react-logo"}
              ]
            }
            img={imgCourseOfReact}
            imgUrl={"https://www.youtube.com/watch?v=7iobxzd_2wY&list=PLUofhDIg_38q4D0xNWp7FEHOTcZhjWJ29"}
            haveRepository={true}
          />

          <Studies_Card 
            place={"Udemy"}
            career={"JavaScript Moderno Guía Definitiva Construye +20 Proyectos"}
            period={"Juan Pablo de la Torre Valdez"}
            description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dignissimos enim officia laborum cupiditate quam, deleniti ipsum iste repellat ea provident voluptas eligendi eius laudantium eos sed error, quis id. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita numquam a, deleniti molestiae laborum beatae veniam odit accusamus culpa aut et ut assumenda quas? Est ad similique alias dolorum ab?"}
            techStackArray={[{src: javascriptLogo, alt: "javascript-logo"}]}
            img={imgCourseJS}
            imgUrl={"https://www.udemy.com/course/javascript-moderno-guia-definitiva-construye-10-proyectos/"}
            haveRepository={true}
          />

          <Studies_Card 
            place={"Udemy"}
            career={"Desarrollo Web Completo con HTML5, CSS3, JS, AJAX, PHP y MySQL"}
            period={"Juan Pablo de la Torre Valdez"}
            description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dignissimos enim officia laborum cupiditate quam, deleniti ipsum iste repellat ea provident voluptas eligendi eius laudantium eos sed error, quis id. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita numquam a, deleniti molestiae laborum beatae veniam odit accusamus culpa aut et ut assumenda quas? Est ad similique alias dolorum ab?"}
            techStackArray={
              [
                {src: htmlLogo, alt: "html-logo"}, 
                {src: cssLogo, alt: "css-logo"}, 
                {src: javascriptLogo, alt: "javascript-logo"}, 
                {src: phpLogo, alt: "php-logo"}, 
                {src: mysqlLogo, alt: "mysql-logo"}, 
              ]
            }
            img={imgCourseWeb}
            imgUrl={"https://www.udemy.com/course/desarrollo-web-completo-con-html5-css3-js-php-y-mysql/"}
            haveRepository={true}
          />

        </section>
    )
}
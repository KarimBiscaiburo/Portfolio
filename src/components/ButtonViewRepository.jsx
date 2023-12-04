import githubLogo from "../img/github-logo.png";
import "../styles/button.css";

export default function ButtonViewRepository() {

    return (
        <button className="view-repository">
            <p>Ver Repositorio</p>
            <img src={githubLogo} alt="github-logo" className="logo"/>
        </button>
    )
}
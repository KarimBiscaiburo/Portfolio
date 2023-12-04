import { Link } from "react-router-dom";
import ButtonViewRepository from "./ButtonViewRepository";

export default function Studies_Card({ place, career, period, description, techStackArray, img, imgUrl, haveRepository = false }) {

    return (

        <div className="studies-section">
            <div className="details">
                <h3>{place}</h3>
                <h4>{career}</h4>
                <p className="period">{period}</p>

                <p className="description">{description}</p>

                <div className="tech-stack-icons">
                    {
                        techStackArray.map( element => {
                            return <img key={element.alt} src={element.src} alt={element.alt} className="logo"/>
                        })
                    }
                </div>
                
                {
                    haveRepository ? 
                    <div className="view-repository-container">
                        <ButtonViewRepository />
                    </div>
                    :
                    null
                }
            </div>

            <Link target="blank" to={imgUrl}>
                <img className="studies-image" src={img} alt={career} />
            </Link>

        </div>
    )
}
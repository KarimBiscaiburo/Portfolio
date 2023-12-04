import ButtonViewRepository from "./ButtonViewRepository";

export default function Experience_Card({ title, subtitle, period, description }) {

    return (
        <div className="experience-section">
            <img src="" alt="" />
            <div className="details">
                <h3>{title}</h3>
                <h4>{subtitle}</h4>
                <p className="period">{period}</p>

                <p className="description">{description}</p>
                
                <div className="view-repository-container">
                    <ButtonViewRepository />
                </div>
            </div>
        </div>
    )
        
}
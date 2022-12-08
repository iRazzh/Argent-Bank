import "../../css/FeatureHome/FeatureHome.css"

export default function FeatureHome(props) {

    return(
        <>
            <div className="feature-item">
                <img src={props.featureIcon} alt="Chat Icon" className="feature-icon" />
                <h3 className="feature-item-title">{props.featureTitle}</h3>
                <p>{props.featureText}</p>
            </div>
        </>
    )
}
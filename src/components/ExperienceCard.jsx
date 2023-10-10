import "../App.css"

export function ExperienceCard({ companyName, rol, time, src }) {
    return (
        <div className="experienceCard">
            <div className="experienceCard-img"><img src={src} /></div>
            <div className="experienceCard-div">
                <p className="experienceCard-title">{`${companyName}`}</p>
                <p className="experienceCard-subtitle">{`${rol}`}</p>
                <p className="experienceCard-p">{`${time}`}</p>
            </div>
        </div>
    );
}
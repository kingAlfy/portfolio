import "../App.css";
import { ExperienceCard } from "./ExperienceCard";
import { Link } from "react-router-dom";

export function ExperienceArticle() {
    return (
        <div className="experienceContainer-div">
            <ExperienceCard companyName="V3" rol="Teleoperador" time="2 meses" src="data:image/jpeg;base64,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" />
            <ExperienceCard companyName="AMG" rol="Técnico informático" time="3 meses" src={"https://amg.es/wp-content/uploads/2018/01/logo1.png"} />
            <ExperienceCard companyName="Efedos" rol="Técnico onsite" time="1 meses" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnk_Bz0vHYrcJ2t3_YLfnIwwDGL6D_JCTmzCHFgVvAeSioR8u8QJaxtdAs7SZl8p1vgMc&usqp=CAU"} />
            <ExperienceCard companyName="Astibot" rol="Desarrollador web" time="3 meses" src="https://pbs.twimg.com/profile_images/1154359527980097537/8f_3WrBw_400x400.jpg" />
        </div>
    );
}
import { TypewritterTitle } from "../components/TypewritterTitle";
import { Link } from "react-router-dom";


export function HomePageCard() {
    return (
        <div className="homePage-card">
            <h1 className="homePage-card-title">ALFONSO RAVELO GIL</h1>
            <h2 className="homePage-card-subtitle">DESARROLLADOR <TypewritterTitle /></h2>
            <Link className="homePage-card-btn" to="/contact">CONTACTO</Link>
        </div>
    );
}
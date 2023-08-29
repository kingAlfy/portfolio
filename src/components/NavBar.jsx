import Hamburger from "hamburger-react";
import useMenu from "../hooks/useMenu";
import { Link } from "react-router-dom";
import useWindowWidth from "../hooks/useWindowWidth";

export function NavBar() {
    const { isMenuOpen, openMenu, closeMenu } = useMenu();

    const windowWidth = useWindowWidth();

    const cvFilePath = "/AlfonsoRaveloCV.pdf";

    const handleClick = () => {
        if (windowWidth <= 976) {
            closeMenu();
        }

    }


    return (
        <nav>
            <Link className="navBar-title" to="/">ALFONSORAVELOGIL.COM</Link>

            {isMenuOpen
                ?
                // NOTA: En caso de querer refactorizar recuerda que el hamburger quedaría desplazado
                <ul className="navBar" onClick={handleClick}>

                    <li className="navBar-item"><Hamburger color="white" toggled="true" onToggle={toggled => {
                        if (toggled) {
                            openMenu();
                        } else {
                            closeMenu();
                        }
                    }} /></li>
                    <Link to="/aboutme" onClick={handleClick}><li className="navBar-item">Sobre mí</li></Link>
                    <Link to="/experience"><li className="navBar-item">Experiencia</li></Link>
                    {windowWidth <= 976
                        ? <Link to="/skills"><li className="navBar-item">Skills</li></Link>
                        : null
                    }
                    <Link to="/contact"><li className="navBar-item">Contacto</li></Link>
                    <a href={cvFilePath} download="AlfonsoRaveloGilCV.pdf"><li className="navBar-item">CV</li></a>
                </ul>

                : <Hamburger color="white" onToggle={toggled => {
                    if (toggled) {
                        openMenu();
                    } else {
                        closeMenu();
                    }
                }} />
            }
        </nav >

    );

}
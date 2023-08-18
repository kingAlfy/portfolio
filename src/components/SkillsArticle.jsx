import "../App.css";
import { IconContext } from "react-icons";
import { FaJava } from 'react-icons/fa'
import { SiSpring, SiJavascript, SiReact, SiPhp, SiLaravel, SiMysql } from "react-icons/si";
import { Tooltip } from 'react-tooltip';

export function SkillsArticle() {
    return (
        <div className="skillsContainer">
            <h1 className="skillsContainer-title"> TECNOLOGÍAS CON LAS QUE TRABAJO: </h1>
            <IconContext.Provider value={{ size: "60px" }}>
                <div className="skillsContainer-div">
                    <a className="skillsContainer-tooltip--java">
                        <div className="skillsContainer-svg">
                            <FaJava />
                        </div>
                    </a>

                    <a className="skillsContainer-tooltip--spring">
                        <div className="skillsContainer-svg">
                            < SiSpring />
                        </div>
                    </a>

                    <a className="skillsContainer-tooltip--js">
                        <div className="skillsContainer-svg">
                            <SiJavascript />
                        </div>
                    </a>

                    <a className="skillsContainer-tooltip--react">
                        <div className="skillsContainer-svg">
                            <SiReact />
                        </div>
                    </a>

                    <a className="skillsContainer-tooltip--php">
                        <div className="skillsContainer-svg">
                            <SiPhp />
                        </div>
                    </a>

                    <a className="skillsContainer-tooltip--laravel">
                        <div className="skillsContainer-svg">
                            <SiLaravel />
                        </div>
                    </a>

                    <a className="skillsContainer-tooltip--mySql">
                        <div className="skillsContainer-svg">
                            <SiMysql />
                        </div>
                    </a>

                </div>
            </IconContext.Provider >
            <h1 className="skillsContainer-title">MI STACK FAVORITO: </h1>
            <IconContext.Provider value={{ size: "60px" }}>
                <div className="skillsContainer-div">
                    <a className="skillsContainer-tooltip--spring">
                        <div className="skillsContainer-svg">
                            < SiSpring />
                        </div>
                    </a>
                    <a className="skillsContainer-tooltip--react">
                        <div className="skillsContainer-svg">
                            <SiReact />
                        </div>
                    </a>
                    <a className="skillsContainer-tooltip--mySql">
                        <div className="skillsContainer-svg">
                            <SiMysql />
                        </div>
                    </a>


                    <Tooltip anchorSelect=".skillsContainer-tooltip--java" content="Java" className="skillsContainer-tooltip" />
                    <Tooltip anchorSelect=".skillsContainer-tooltip--spring" content="Spring Boot" className="skillsContainer-tooltip" />
                    <Tooltip anchorSelect=".skillsContainer-tooltip--react" content="React" className="skillsContainer-tooltip" />
                    <Tooltip anchorSelect=".skillsContainer-tooltip--js" content="Javascript" className="skillsContainer-tooltip" />
                    <Tooltip anchorSelect=".skillsContainer-tooltip--php" content="PHP" className="skillsContainer-tooltip" />
                    <Tooltip anchorSelect=".skillsContainer-tooltip--laravel" content="Laravel" className="skillsContainer-tooltip" />
                    <Tooltip anchorSelect=".skillsContainer-tooltip--mySql" content="MySQL" className="skillsContainer-tooltip" />
                </div>
            </IconContext.Provider>
        </div >
    );
}


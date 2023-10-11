import "../App.css";
import { ExperienceArticle } from "../components/ExperienceArticle";
import { SkillsArticle } from "../components/SkillsArticle";
import useWindowWidth from "../hooks/useWindowWidth";

export function ExperiencePage() {
    const windowWidth = useWindowWidth();

    return (
        <main>
            <section className="experiencePage-section">
                <article className="experiencePage-article">
                    <ExperienceArticle />

                    <div className="aboutMeArticle-card">
                        <h2 className="aboutMeArticle-card-subtitle">Sobre mi experiencia</h2>
                        <p className="aboutMeArticle-card-p">Mi experiencia profesional es muy variada. Tengo experiencia en distintas áreas, y gracias a esto mi perfil profesional no solo es cercano a la programación sino que también tengo conocimientos y experiencia como técnico informático.</p>
                        <h2 className="aboutMeArticle-card-subtitle">Como técnico informático</h2>
                        <p className="aboutMeArticle-card-p">Como técnico informático he dado tanto servicio de soporte técnico presencial como servicio de soporte técnico en remoto.</p>
                        <p className="aboutMeArticle-card-p">Durante esta etapa me encargaba principalmente de solucionar incidencias usando los conocimientos de redes, sistemas operativos o hardware microinformático que tengo. Usaba herramientas de ticketing para gestionar adecuadamente el ciclo de vida de una incidencia y, en algunos casos, escalaba la incidencia al departamento de la empresa que fuese necesario.</p>
                        <p className="aboutMeArticle-card-p">También tengo conocimientos y experiencia gestionando dominios en Active Directory, gestionando la red interna de la empresa y encargandome de gestionar servidores tanto con el sistema operativo Linux, con herramientas como apache2, como con Windows Server.</p>
                        <h2 className="aboutMeArticle-card-subtitle">Como desarrollador web</h2>
                        <p className="aboutMeArticle-card-p">Como desarrollador web me encargué de la creación y despliegue de diversos productos de software, principalmente programas de gestión internos de diversos organismos públicos. He actuado en la parte del backend, con lenguajes como PHP y Java, y con frameworks como Laravel y Spring Boot, creando API rest. Además, tengo conocimientos y realizaba aportaciones al frontend usando tecnologías como HTML, CSS y Javascript.</p>
                        <p className="aboutMeArticle-card-p">También me encargué de la fase de análisis de los proyecto que creaba, realizando la documentación necesaria, diagramas UML y E/R, del proyecto.</p>
                        <p className="aboutMeArticle-card-p">Siempre me he encargado del despliegue de las aplicaciones web que programo y esto, en parte, es gracias a que tengo conocimientos amplios en sistemas operativos orientados a servidores, como Linux. Este despliegue lo he realizado en diversas ocasiones con tecnologías como docker y en VPS, como pueden ser los que ofrecen Clouding u Oracle Cloud, utilizando apache2.</p>
                    </div >

                    <SkillsArticle />
                </article>
            </section>
        </main >
    )
}
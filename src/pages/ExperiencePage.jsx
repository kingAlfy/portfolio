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
                    {windowWidth >= 768
                        ? <SkillsArticle />
                        : null
                    }
                </article>
            </section>
        </main>
    )
}
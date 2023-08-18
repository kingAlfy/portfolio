import "../App.css";
import { SkillsArticle } from "../components/SkillsArticle"

export function SkillsPage() {
    return (
        <main className="skillsPage-main">
            <section className="skillsPage-section">
                <article className="skillsPage-article">
                    <SkillsArticle />
                </article>
            </section>
        </main>
    )
}
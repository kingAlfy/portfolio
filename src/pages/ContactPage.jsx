import '../App.css';
import { ContactCard } from '../components/ContactCard';

export function ContactPage() {
    return (
        <main>
            <section className="contactPage-section">
                <ContactCard />
            </section>
        </main>
    );
}

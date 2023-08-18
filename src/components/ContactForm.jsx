import "../App.css";

export function ContactForm() {
    return (
        <div className="contactForm">
            <form action="post" className="contactForm-form">
                <input type="text" name="name" className="contactForm-input contactForm-input--name" placeholder="Nombre" />
                <input type="text" name="surnames" className="contactForm-input contactForm-input--surnames" placeholder="Apellidos" />
                <input type="text" name="email" className="contactForm-input contactForm-input--email" placeholder="Email" />
                <input type="text" name="companyName" className="contactForm-input contactForm-input--companyName" placeholder="Empresa" />
                <input type="text" name="subject" className="contactForm-input contactForm-input--subject" placeholder="Asunto" />
                <textarea name="description" cols="30" rows="10" className="contactForm-textarea" placeholder="Descripción..."></textarea>
                <input type="button" value="Enviar" className="homePage-card-btn contactForm-btn" />
            </form>
        </div>

    );
}
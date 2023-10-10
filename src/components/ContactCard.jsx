import { FaLinkedin, FaMobileAlt, FaGithub } from 'react-icons/fa'
import { GrMail } from 'react-icons/gr';

export function ContactCard() {
    return (
        <div className="contactCard">
            <h1 className="contactCard-title">CONTACTO</h1>
            <ul className='contactCard-list'>
                <a href="https://www.linkedin.com/in/alfonso-ravelo-gil-0b5671265/">
                    <li className='contactCard-list-element contactCard-list-element--phone'>
                        <FaLinkedin />
                        Alfonso Ravelo Gil
                    </li>
                </a>

                <li className='contactCard-list-element contactCard-list-element--linkedin'>
                    <GrMail />
                    <a href="mailto:al2367.arg@gmail.com">al2367.arg@gmail.com</a>
                </li>

                <a href="https://github.com/kingAlfy/">
                    <li className='contactCard-list-element contactCard-list-element--linkedin'>
                        <FaGithub />
                        kingAlfy
                    </li>
                </a>

                <li className='contactCard-list-element contactCard-list-element--linkedin'>
                    <FaMobileAlt />
                    <a href="tel:+34 619354141">+34 619 35 41 41</a>
                </li>
            </ul>

        </div>
    );
}

import './Contact.css';

function Contact() {
    return (
        <div className="contact-container">
            <section>
                <h1 className="contact-title">Contact</h1>
                <ul className="contact-info">
                    <li>
                        <a href="tel:+19784604591" data-label="Phone">
                            <span>978-460-4591</span>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:nat.cabrera107@gmail.com" data-label="Email">
                            <span>nat.cabrera107@gmail.com</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/nat-cabrera-94a565b1"
                            data-label="LinkedIn"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span>nat-cabrera-94a565b1</span>
                        </a>
                    </li>
                </ul>
            </section>
        </div>
    );
}

export default Contact;
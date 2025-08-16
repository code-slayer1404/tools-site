import { useLanguage } from '../../contexts/useLanguage';
import { FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import '../../styles/components/contact.css';

export default function Contact() {
    const { t } = useLanguage();

    return (
        <section id="contact" className="contact-section">
            <div className="contact-container">
                <h2 className="contact-title">{t('contact-title')}</h2>

                <div className="social-links">
                    <a href="#" className="social-link" aria-label="Twitter">
                        <FaTwitter />
                    </a>
                    <a href="#" className="social-link" aria-label="Instagram">
                        <FaInstagram />
                    </a>
                    <a href="#" className="social-link" aria-label="YouTube">
                        <FaYoutube />
                    </a>
                </div>

                <p className="contact-email">
                    {t('contact-email-prefix')}
                    <a href="mailto:contact@example.com" className="email-link">
                        contact@example.com
                    </a>
                    {t('contact-email-suffix')}
                </p>
            </div>
        </section>
    );
}
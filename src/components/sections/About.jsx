import { useLanguage } from '../../contexts/useLanguage';
import '../../styles/components/about.css'

export default function About() {
    const { t } = useLanguage();

    return (
        <section id="about" className="about-section">
            <div className="about-container">
                <h2 className="about-title">{t('about-title')}</h2>
                <p className="about-content">
                    {t('about-content')}
                </p>
            </div>
        </section>
    );
}
import { useLanguage } from '../../contexts/useLanguage';
import '../../styles/components/footer.css';

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="site-footer">
            <div className="footer-container">
                <p className="footer-text">
                    &copy; {new Date().getFullYear()} {t('footer-text')}
                </p>
            </div>
        </footer>
    );
}
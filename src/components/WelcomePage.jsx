import '../styles-home.css';
import { t } from '../i18n';

const HOME_MOBILE_LOGO = 'https://res.cloudinary.com/dwb9x5s1j/image/upload/v1784690277/26dc1d81-dc94-4363-93d0-6998d3330e7b_bvzxiw.png';

const HERO_IMAGE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmRp_4hhySHfmbyfELjHkAKIdltS4OZtVbe06YcbTb-jU682OE5scNDsCsKw7PnGp3-7wgdKfLH_oTz2AivABCj4EIakg7mRtt8kcR8lNx_QZEpGllJhleNM1ynE4J9teRLooQh6DlhDTYxjHa0pylC-FsheZNPYizB_0YIOVj8RSwWTar1O9SbWVerzMXHMJxBORahpepUT974ZOLO1a7_YaITP6Fhg8gwKMi1sj4b8jxcqxPii6vmg';

function WelcomePage({ lang = 'en' }) {
  return (
    <main className="sunset-home" style={{ '--sh-hero-image': `url('${HERO_IMAGE}')` }}>
      <div className="sh-hero-background" aria-hidden="true" />
      <div className="sh-ambient-glow" aria-hidden="true" />

      <section className="sh-hero-content" aria-labelledby="home-title">
        <div className="sh-hero-copy">
          <h1 id="home-title" className="sr-only">{t('welcome.greeting', lang)} SunSet Hill Resort</h1>
          <div className="sh-mobile-brand-line" aria-hidden="true">
            <img src={HOME_MOBILE_LOGO} alt="" className="sh-mobile-logo-image" />
          </div>
          <p className="sh-hero-lead">
            {t('welcome.guest', lang)}
          </p>
          <p className="sh-hero-support">
            {t('welcome.para1', lang)} {t('welcome.para2', lang)}
          </p>
          <div className="sh-hero-actions">
            <a className="sh-primary-action" href="#services">{t('welcome.exploreServices', lang)}</a>
            <a className="sh-secondary-action" href="#wifi">{t('rules.contactReception', lang)}</a>
          </div>
        </div>
      </section>

      <footer className="sh-home-footer">
        <p>{t('welcome.copyright', lang)}</p>
        <div>
          <span>{t('welcome.privacyPolicy', lang)}</span>
          <span>{t('welcome.termsOfService', lang)}</span>
          <span>{t('welcome.location', lang)}</span>
        </div>
      </footer>
    </main>
  );
}

export default WelcomePage;

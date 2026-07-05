import { Link } from 'react-router-dom';
import { APP_URL } from '../siteMeta';

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__inner">
          <div>
            <div className="site-footer__brand">
              <img src="/favicon.svg" alt="" />
              Condoclar
            </div>
            <p className="site-footer__tagline">
              A condominium is a community. Condoclar is its digital home — removing the busywork
              so neighbours can focus on the good.
            </p>
          </div>
          <nav aria-label="Site">
            <Link to="/">Why Condoclar</Link>
            <Link to="/features/">Features</Link>
            <Link to="/neighbours/">Neighbours &amp; vendors</Link>
            <Link to="/manifesto/">Manifesto</Link>
          </nav>
          <nav aria-label="Product">
            <a href={APP_URL}>Open the app</a>
            <a href={`${APP_URL}/users/help`}>Help</a>
          </nav>
        </div>
        <div className="site-footer__legal">
          © {new Date().getFullYear()} Condoclar. Built with care for the people who share a roof.
          Available in English, Português, Español, Français, Italiano and Deutsch.
        </div>
      </div>
    </footer>
  );
}

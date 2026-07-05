import { Link } from 'react-router-dom';
import { APP_URL } from '../siteMeta';
import { localePath, useCopy, useLocale } from '../i18n';

export default function SiteFooter() {
  const copy = useCopy();
  const locale = useLocale();
  const p = (path: string) => localePath(locale, path);

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__inner">
          <div>
            <div className="site-footer__brand">
              <img src="/favicon.svg" alt="" />
              Condoclar
            </div>
            <p className="site-footer__tagline">{copy.footer.tagline}</p>
          </div>
          <nav aria-label="Site">
            <Link to={p('/')}>{copy.footer.why}</Link>
            <Link to={p('/features/')}>{copy.footer.features}</Link>
            <Link to={p('/neighbours/')}>{copy.footer.neighbours}</Link>
            <Link to={p('/manifesto/')}>{copy.footer.manifesto}</Link>
          </nav>
          <nav aria-label="Product">
            <a href={APP_URL}>{copy.footer.openApp}</a>
            <a href={`${APP_URL}/users/help`}>{copy.footer.help}</a>
          </nav>
        </div>
        <div className="site-footer__legal">
          © {new Date().getFullYear()} Condoclar. {copy.footer.legal}
        </div>
      </div>
    </footer>
  );
}

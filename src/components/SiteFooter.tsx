import { GlobalOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';
import { APP_URL } from '../siteMeta';
import {
  COPY,
  LOCALES,
  localePath,
  parsePath,
  persistLocale,
  useCopy,
  useLocale,
  type LocaleCode,
} from '../i18n';

export default function SiteFooter() {
  const copy = useCopy();
  const locale = useLocale();
  const { pathname } = useLocation();
  const { path } = parsePath(pathname);
  const p = (to: string) => localePath(locale, to);

  const remember = (code: LocaleCode) => persistLocale(code, { explicit: true });

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
        {/* Every language in its own name — always available down here. */}
        <nav className="site-footer__langs" aria-label={copy.header.languageLabel}>
          <GlobalOutlined aria-hidden="true" />
          {LOCALES.map((code) => (
            <Link
              key={code}
              to={localePath(code, path)}
              onClick={() => remember(code)}
              className={code === locale ? 'site-footer__lang--current' : undefined}
              aria-current={code === locale ? 'true' : undefined}
              lang={code}
            >
              {COPY[code].langName}
            </Link>
          ))}
        </nav>
        <div className="site-footer__legal">
          © {new Date().getFullYear()} Condoclar. {copy.footer.legal}
        </div>
      </div>
    </footer>
  );
}

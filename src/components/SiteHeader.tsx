import { Button, Dropdown } from 'antd';
import { DownOutlined, GlobalOutlined } from '@ant-design/icons';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { APP_URL } from '../siteMeta';
import {
  COPY,
  LANG_STORAGE_KEY,
  LOCALES,
  localePath,
  parsePath,
  useCopy,
  useLocale,
  type LocaleCode,
} from '../i18n';

export default function SiteHeader() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const locale = useLocale();
  const copy = useCopy();
  const { path } = parsePath(pathname);
  const normalised = path.endsWith('/') ? path : `${path}/`;

  const nav = [
    { to: '/', label: copy.header.why },
    { to: '/features/', label: copy.header.features },
    { to: '/neighbours/', label: copy.header.neighbours },
    { to: '/manifesto/', label: copy.header.manifesto },
  ];

  // Every language is listed in its own name — English always reads "English",
  // Deutsch always reads "Deutsch" — so anyone can find their way home.
  const switchTo = (code: LocaleCode) => {
    try {
      localStorage.setItem(LANG_STORAGE_KEY, code);
    } catch {
      /* private browsing — the choice just won't persist */
    }
    navigate(localePath(code, normalised));
  };

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link to={localePath(locale, '/')} className="site-header__brand" aria-label="Condoclar">
          <img src="/favicon.svg" alt="" />
          <span>Condoclar</span>
        </Link>
        <nav className="site-header__nav" aria-label="Main">
          {nav.map((item) => {
            const active = item.to === normalised;
            return (
              <Link
                key={item.to}
                to={localePath(locale, item.to)}
                className={`site-header__link${active ? ' site-header__link--active' : ''}`}
                aria-current={active ? 'page' : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <Dropdown
          menu={{
            items: LOCALES.map((code) => ({
              key: code,
              label: COPY[code].langName,
            })),
            selectedKeys: [locale],
            onClick: ({ key }) => switchTo(key as LocaleCode),
          }}
        >
          <button type="button" className="site-header__lang" aria-label={copy.header.languageLabel}>
            <GlobalOutlined /> {COPY[locale].langName} <DownOutlined style={{ fontSize: 10 }} />
          </button>
        </Dropdown>
        <Button type="primary" size="middle" href={APP_URL} className="site-header__cta">
          {copy.header.openApp}
        </Button>
      </div>
    </header>
  );
}

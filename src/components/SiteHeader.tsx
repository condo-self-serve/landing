import { Button } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { APP_URL } from '../siteMeta';

const NAV = [
  { to: '/', label: 'Why' },
  { to: '/features/', label: 'Features' },
  { to: '/neighbours/', label: 'Neighbours' },
  { to: '/manifesto/', label: 'Manifesto' },
];

export default function SiteHeader() {
  const { pathname } = useLocation();
  const normalised = pathname.endsWith('/') ? pathname : `${pathname}/`;

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link to="/" className="site-header__brand" aria-label="Condoclar home">
          <img src="/favicon.svg" alt="" />
          <span>Condoclar</span>
        </Link>
        <nav className="site-header__nav" aria-label="Main">
          {NAV.map((item) => {
            const active = item.to === '/' ? normalised === '/' : normalised === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`site-header__link${active ? ' site-header__link--active' : ''}`}
                aria-current={active ? 'page' : undefined}
              >
                {item.label}
              </Link>
            );
          })}
          <Button type="primary" size="middle" href={APP_URL}>
            Open Condoclar
          </Button>
        </nav>
      </div>
    </header>
  );
}

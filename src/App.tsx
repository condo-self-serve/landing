import { useEffect } from 'react';
import { ConfigProvider } from 'antd';
import { Route, Routes, useLocation } from 'react-router-dom';
import { landingTheme } from './theme';
import { pageForPath } from './siteMeta';
import { LocaleContext, LOCALES, localePath, parsePath } from './i18n';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';
import HomePage from './pages/HomePage';
import FeaturesPage from './pages/FeaturesPage';
import NeighboursPage from './pages/NeighboursPage';
import ManifestoPage from './pages/ManifestoPage';
import NotFoundPage from './pages/NotFoundPage';
import './styles.css';

/** Keeps title/description/lang in sync on client-side navigation (prerendered
 *  pages already ship the correct head; this covers SPA transitions). */
function HeadSync() {
  const { pathname } = useLocation();
  useEffect(() => {
    const meta = pageForPath(pathname);
    document.title = meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', meta.description);
    document.documentElement.lang = meta.locale;
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const { pathname } = useLocation();
  const { locale } = parsePath(pathname);

  return (
    <LocaleContext.Provider value={locale}>
      <ConfigProvider theme={landingTheme}>
        <HeadSync />
        <SiteHeader />
        <Routes>
          {LOCALES.map((code) => (
            <Route key={code} path={localePath(code, '/')}>
              <Route index element={<HomePage />} />
              <Route path="features" element={<FeaturesPage />} />
              <Route path="neighbours" element={<NeighboursPage />} />
              <Route path="manifesto" element={<ManifestoPage />} />
            </Route>
          ))}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <SiteFooter />
      </ConfigProvider>
    </LocaleContext.Provider>
  );
}

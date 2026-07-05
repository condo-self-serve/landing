import { useEffect } from 'react';
import { ConfigProvider } from 'antd';
import { Route, Routes, useLocation } from 'react-router-dom';
import { landingTheme } from './theme';
import { pageForPath } from './siteMeta';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';
import HomePage from './pages/HomePage';
import FeaturesPage from './pages/FeaturesPage';
import NeighboursPage from './pages/NeighboursPage';
import ManifestoPage from './pages/ManifestoPage';
import NotFoundPage from './pages/NotFoundPage';
import './styles.css';

/** Keeps title/description in sync on client-side navigation (prerendered
 *  pages already ship the correct head; this covers SPA transitions). */
function HeadSync() {
  const { pathname } = useLocation();
  useEffect(() => {
    const meta = pageForPath(pathname);
    document.title = meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', meta.description);
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <ConfigProvider theme={landingTheme}>
      <HeadSync />
      <SiteHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/neighbours" element={<NeighboursPage />} />
        <Route path="/manifesto" element={<ManifestoPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <SiteFooter />
    </ConfigProvider>
  );
}

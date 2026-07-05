import { renderToString } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs';
import App from './App';

export { PAGES, SITE_URL, SITE_NAME, APP_URL } from './siteMeta';
export { COPY, LOCALES, DEFAULT_LOCALE, localePath } from './i18n';

/** Render a route to static HTML plus the antd (cssinjs) style tags it needs. */
export function render(url: string): { html: string; styleText: string } {
  const cache = createCache();
  const html = renderToString(
    <StyleProvider cache={cache}>
      <MemoryRouter initialEntries={[url]}>
        <App />
      </MemoryRouter>
    </StyleProvider>,
  );
  const styleText = extractStyle(cache);
  return { html, styleText };
}

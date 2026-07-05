import { renderToString } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs';
import App from './App';

export { PAGES, FAQ, SITE_URL, SITE_NAME, APP_URL } from './siteMeta';

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

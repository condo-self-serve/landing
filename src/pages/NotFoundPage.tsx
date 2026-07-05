import { Button } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { localePath, useCopy, useLocale } from '../i18n';

export default function NotFoundPage() {
  const copy = useCopy().notFound;
  const locale = useLocale();

  return (
    <main>
      <section className="section" style={{ textAlign: 'center', minHeight: '50vh' }}>
        <div className="container">
          <span className="eyebrow">404</span>
          <h1>{copy.title}</h1>
          <p className="lede" style={{ margin: '0 auto 32px' }}>
            {copy.lede}
          </p>
          <Link to={localePath(locale, '/')}>
            <Button type="primary" size="large" icon={<HomeOutlined />}>
              {copy.button}
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}

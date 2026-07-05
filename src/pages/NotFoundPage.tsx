import { Button } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <main>
      <section className="section" style={{ textAlign: 'center', minHeight: '50vh' }}>
        <div className="container">
          <span className="eyebrow">404</span>
          <h1>This page moved out</h1>
          <p className="lede" style={{ margin: '0 auto 32px' }}>
            The page you’re looking for doesn’t live here anymore — but the community does.
          </p>
          <Link to="/">
            <Button type="primary" size="large" icon={<HomeOutlined />}>
              Back to the courtyard
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}

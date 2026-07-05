import { Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import { APP_URL } from '../siteMeta';
import type { CtaCopy } from '../i18n/types';

export default function CtaBand({ cta }: { cta: CtaCopy }) {
  return (
    <section className="section--ink cta-band">
      <div className="container">
        <h2>{cta.title}</h2>
        <p>{cta.body}</p>
        <Button type="primary" size="large" href={APP_URL} icon={<ArrowRightOutlined />} iconPosition="end">
          {cta.button}
        </Button>
      </div>
    </section>
  );
}

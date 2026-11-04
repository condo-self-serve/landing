import { Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import type { CtaCopy } from '../i18n/types';
import { useComingSoon } from './ComingSoon';

export default function CtaBand({ cta }: { cta: CtaCopy }) {
  const comingSoon = useComingSoon();

  return (
    <section className="section--ink cta-band">
      <div className="container">
        <h2>{cta.title}</h2>
        <p>{cta.body}</p>
        <Button type="primary" size="large" onClick={comingSoon.open} icon={<ArrowRightOutlined />} iconPosition="end">
          {cta.button}
        </Button>
        {comingSoon.modal}
      </div>
    </section>
  );
}

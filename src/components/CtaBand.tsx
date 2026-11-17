import { Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import type { CtaCopy } from '../i18n/types';
import { useComingSoon } from './ComingSoon';

/** `onAction` replaces what the button does; without it the sign-ups-paused notice opens. */
export default function CtaBand({ cta, onAction }: { cta: CtaCopy; onAction?: () => void }) {
  const comingSoon = useComingSoon();

  return (
    <section className="section--ink cta-band">
      <div className="container">
        <h2>{cta.title}</h2>
        <p>{cta.body}</p>
        <Button type="primary" size="large" onClick={onAction ?? comingSoon.open} icon={<ArrowRightOutlined />} iconPosition="end">
          {cta.button}
        </Button>
        {comingSoon.modal}
      </div>
    </section>
  );
}

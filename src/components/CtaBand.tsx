import { Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import { APP_URL } from '../siteMeta';

interface Props {
  title: string;
  body: string;
  buttonLabel?: string;
}

export default function CtaBand({ title, body, buttonLabel = 'Bring your condo together' }: Props) {
  return (
    <section className="section--ink cta-band">
      <div className="container">
        <h2>{title}</h2>
        <p>{body}</p>
        <Button type="primary" size="large" href={APP_URL} icon={<ArrowRightOutlined />} iconPosition="end">
          {buttonLabel}
        </Button>
      </div>
    </section>
  );
}

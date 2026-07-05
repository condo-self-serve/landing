import { Button } from 'antd';
import {
  ArrowRightOutlined,
  EyeInvisibleOutlined,
  LockOutlined,
  StarOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import { APP_URL } from '../siteMeta';
import { useCopy } from '../i18n';
import CtaBand from '../components/CtaBand';

// Order matches copy.neighbours.trust.
const TRUST_ICONS = [
  <StarOutlined key="i" />,
  <TeamOutlined key="i" />,
  <LockOutlined key="i" />,
  <EyeInvisibleOutlined key="i" />,
];

export default function NeighboursPage() {
  const copy = useCopy().neighbours;

  return (
    <main>
      <section className="hero hero--page">
        <div className="hero__media">
          <img src="/media/neighbours-vendor.jpg" alt={copy.heroAlt} fetchPriority="high" />
        </div>
        <div className="container">
          <div className="hero__inner">
            <span className="eyebrow">{copy.heroEyebrow}</span>
            <h1>{copy.heroTitle}</h1>
            <p className="lede">{copy.heroLede}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">{copy.oldEyebrow}</span>
          <h2>{copy.oldTitle}</h2>
          <p className="prose">{copy.oldP1}</p>
          <p className="prose">{copy.oldP2}</p>
        </div>
      </section>

      <section className="section section--parchment" style={{ paddingTop: 72 }}>
        <div className="container">
          <span className="eyebrow">{copy.wayEyebrow}</span>
          <h2>{copy.wayTitle}</h2>
          <div className="steps">
            {copy.steps.map((step, i) => (
              <div className="step" key={step.title}>
                <div className="step__number">{String(i + 1).padStart(2, '0')}</div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="split">
            <div className="split__media">
              <img src="/media/craft-hands.jpg" alt={copy.proofImgAlt} loading="lazy" />
            </div>
            <div>
              <span className="eyebrow">{copy.proofEyebrow}</span>
              <h2>{copy.proofTitle}</h2>
              <p className="prose">{copy.proofP1}</p>
              <p className="prose">{copy.proofP2}</p>
              <Button type="primary" size="large" href={APP_URL} icon={<ArrowRightOutlined />} iconPosition="end">
                {copy.proofButton}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--parchment">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <span className="eyebrow">{copy.trustEyebrow}</span>
            <h2>{copy.trustTitle}</h2>
          </div>
          <div className="card-grid card-grid--two">
            {copy.trust.map((card, i) => (
              <div className="story-card" key={card.title}>
                <div className="story-card__kicker">
                  {TRUST_ICONS[i]} {card.kicker}
                </div>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <figure className="image-band" style={{ margin: 0 }}>
        <img src="/media/band-balcony.jpg" alt={copy.bandAlt} loading="lazy" />
        <figcaption>{copy.bandCaption}</figcaption>
      </figure>

      <CtaBand cta={copy.cta} />
    </main>
  );
}

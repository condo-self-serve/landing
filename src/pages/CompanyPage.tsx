import { Button, Collapse } from 'antd';
import {
  AlertOutlined,
  ApartmentOutlined,
  ArrowRightOutlined,
  BarChartOutlined,
  CopyOutlined,
  EyeOutlined,
  FileTextOutlined,
  GlobalOutlined,
  InboxOutlined,
  ProjectOutlined,
  RobotOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { localePath, useCopy, useLocale } from '../i18n';
import CtaBand from '../components/CtaBand';
import { useDemoRequest } from '../components/DemoRequest';

// Structure (images, icons, layout) stays here; all prose lives in the copy
// deck. Order must match copy.company.clusters and each cluster's features.
const CLUSTER_MEDIA = [
  { src: '/media/company-triage.webp', phone: false, reverse: false },
  { src: '/media/company-jobs.webp', phone: false, reverse: true },
  { src: '/media/company-insights.webp', phone: false, reverse: false },
  { src: '/media/company-phone-overview.webp', phone: true, reverse: true },
];

const CLUSTER_ICONS = [
  [<InboxOutlined key="i" />, <RobotOutlined key="i" />, <CopyOutlined key="i" />],
  [<ProjectOutlined key="i" />, <TeamOutlined key="i" />, <ShopOutlined key="i" />],
  [<AlertOutlined key="i" />, <BarChartOutlined key="i" />, <FileTextOutlined key="i" />],
  [<EyeOutlined key="i" />, <GlobalOutlined key="i" />, <UserOutlined key="i" />],
];

const START_ICONS = [<ApartmentOutlined key="i" />, <InboxOutlined key="i" />, <TeamOutlined key="i" />];

/** The page for management companies: many buildings, one place to run them from. */
export default function CompanyPage() {
  const copy = useCopy().company;
  const locale = useLocale();
  const demo = useDemoRequest();
  if (!copy) return null;

  return (
    <main>
      <section className="hero hero--page">
        <div className="hero__media">
          <img src="/media/manifesto-evening.jpg" alt={copy.heroAlt} fetchPriority="high" />
        </div>
        <div className="container">
          <div className="hero__inner">
            <span className="eyebrow">{copy.heroEyebrow}</span>
            <h1>{copy.heroTitle}</h1>
            <p className="lede">{copy.heroLede}</p>
            <div className="hero__actions">
              <Button
                type="primary"
                size="large"
                onClick={demo.open}
                icon={<ArrowRightOutlined />}
                iconPosition="end"
              >
                {copy.ctaPrimary}
              </Button>
              <Button size="large" ghost href={localePath(locale, '/features/')}>
                {copy.ctaSecondary}
              </Button>
              {demo.modal}
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          {/* Plays on request, never on its own: it has music, and the poster already says what it is. */}
          <figure className="app-showcase" style={{ margin: 0 }}>
            <video
              controls
              playsInline
              preload="none"
              poster="/media/every-building-one-board-poster.jpg"
              aria-label={copy.videoLabel}
              width="1920"
              height="1080"
            >
              <source src="/media/every-building-one-board.mp4" type="video/mp4" />
            </video>
            <figcaption>{copy.videoCaption}</figcaption>
          </figure>
        </div>
      </section>

      <section className="section section--parchment">
        <div className="container">
          <span className="eyebrow">{copy.painEyebrow}</span>
          <h2>{copy.painTitle}</h2>
          <div className="card-grid">
            {copy.pains.map((pain) => (
              <div className="story-card" key={pain.title}>
                <div className="story-card__kicker">{pain.kicker}</div>
                <h3>{pain.title}</h3>
                <p>{pain.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">{copy.howEyebrow}</span>
          <h2>{copy.howTitle}</h2>
          <div className="steps">
            {copy.steps.map((step, i) => (
              <div className="step" key={step.title}>
                <div className="step__number">{i + 1}</div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {copy.clusters.map((cluster, ci) => {
        const media = CLUSTER_MEDIA[ci];
        return (
          <section className="cluster" key={cluster.eyebrow}>
            <div className="container">
              <div className={`split${media.reverse ? ' split--reverse' : ''}`}>
                <div className={`split__media ${media.phone ? 'split__media--phone' : 'split__media--app'}`}>
                  <img src={media.src} alt={cluster.imageAlt} loading="lazy" />
                </div>
                <div>
                  <span className="eyebrow">{cluster.eyebrow}</span>
                  <h2>{cluster.title}</h2>
                  <p className="cluster__intro">{cluster.intro}</p>
                  <ul className="mini-features">
                    {cluster.features.map((feature, fi) => (
                      <li className="mini-feature" key={feature.title}>
                        <div className="mini-feature__icon">{CLUSTER_ICONS[ci][fi]}</div>
                        <div>
                          <h3>{feature.title}</h3>
                          <p>
                            {feature.body} <strong>{feature.so}</strong>
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <section className="section section--parchment">
        <div className="container">
          <span className="eyebrow">{copy.startEyebrow}</span>
          <h2>{copy.startTitle}</h2>
          <ul className="mini-features mini-features--row">
            {copy.start.map((item, i) => (
              <li className="mini-feature" key={item.title}>
                <div className="mini-feature__icon">{START_ICONS[i]}</div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <span className="eyebrow">{copy.faqEyebrow}</span>
            <h2>{copy.faqTitle}</h2>
          </div>
          <div className="faq-wrap">
            <Collapse
              ghost
              size="large"
              items={copy.faq.map((f, i) => ({
                key: String(i),
                label: <strong>{f.q}</strong>,
                children: <p style={{ fontSize: 17, lineHeight: 1.7, margin: 0 }}>{f.a}</p>,
              }))}
            />
          </div>
        </div>
      </section>

      <CtaBand cta={copy.cta} onAction={demo.open} />
    </main>
  );
}

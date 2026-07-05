import { Button, Collapse } from 'antd';
import { ArrowRightOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { APP_URL } from '../siteMeta';
import { localePath, useCopy, useLocale } from '../i18n';
import CtaBand from '../components/CtaBand';

export default function HomePage() {
  const copy = useCopy().home;
  const locale = useLocale();

  return (
    <main>
      {/* ------------------------------------------------ hero */}
      <section className="hero">
        <div className="hero__media">
          <img src="/media/hero-courtyard.jpg" alt={copy.heroAlt} fetchPriority="high" />
        </div>
        <div className="container">
          <div className="hero__inner">
            <span className="eyebrow">Condoclar</span>
            <h1>
              {copy.heroLine1}
              <br />
              {copy.heroLine2Pre}
              <span className="accent-underline">{copy.heroAccent}</span>.
            </h1>
            <p className="lede">{copy.heroLede}</p>
            <div className="hero__actions">
              <Button type="primary" size="large" href={APP_URL} icon={<ArrowRightOutlined />} iconPosition="end">
                {copy.ctaPrimary}
              </Button>
              <Button size="large" ghost href={localePath(locale, '/features/')}>
                {copy.ctaSecondary}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ why / golden circle */}
      <section className="section">
        <div className="container">
          <span className="eyebrow">{copy.whyEyebrow}</span>
          <h2>
            {copy.whyTitle1}
            <br />
            {copy.whyTitle2}
          </h2>
          <p className="lede">{copy.whyLede}</p>
          <div className="golden">
            {copy.golden.map((step, i) => (
              <div className={`golden__step${i === 0 ? ' golden__step--why' : ''}`} key={step.label}>
                <div className="golden__label">{step.label}</div>
                <h3>
                  {step.titleAccent && <span className="accent-underline">{step.titleAccent}</span>}
                  {step.title}
                </h3>
                <p>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ product peek */}
      <section className="section section--tight">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <span className="eyebrow">{copy.peekEyebrow}</span>
            <h2>{copy.peekTitle}</h2>
          </div>
          <figure className="app-showcase" style={{ margin: '48px 0 0' }}>
            <img src="/media/app-dashboard.webp" alt={copy.peekAlt} loading="lazy" />
            <figcaption>{copy.peekCaption}</figcaption>
          </figure>
        </div>
      </section>

      {/* ------------------------------------------------ pull quote */}
      <section className="section--parchment section--tight">
        <div className="container">
          <blockquote className="pull-quote">
            {copy.quote}
            <cite>{copy.quoteCite}</cite>
          </blockquote>
        </div>
      </section>

      {/* ------------------------------------------------ small moments */}
      <section className="section">
        <div className="container">
          <span className="eyebrow">{copy.momentsEyebrow}</span>
          <h2>{copy.momentsTitle}</h2>
          <div className="card-grid">
            {copy.moments.map((m) => (
              <div className="story-card" key={m.title}>
                <div className="story-card__kicker">{m.kicker}</div>
                <h3>{m.title}</h3>
                <p>{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ neighbours teaser */}
      <section className="section section--parchment">
        <div className="container">
          <div className="split">
            <div className="split__media">
              <img src="/media/neighbours-vendor.jpg" alt={copy.teaserImgAlt} loading="lazy" />
            </div>
            <div>
              <span className="eyebrow">{copy.teaserEyebrow}</span>
              <h2>{copy.teaserTitle}</h2>
              <p className="prose">{copy.teaserProse}</p>
              <div className="privacy-note">
                <LockOutlined style={{ fontSize: 22, marginTop: 2 }} />
                <span>
                  {copy.privacyPre}
                  <strong>{copy.privacyStrong}</strong>
                  {copy.privacyPost}
                </span>
              </div>
              <p style={{ marginTop: 28 }}>
                <Link to={localePath(locale, '/neighbours/')} className="arrow-link">
                  {copy.teaserLink} <ArrowRightOutlined />
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ FAQ */}
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

      <CtaBand cta={copy.cta} />
    </main>
  );
}

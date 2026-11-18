import { Button } from 'antd';
import { ArrowRightOutlined, EyeOutlined, FileTextOutlined, SafetyOutlined } from '@ant-design/icons';
import { useCopy } from '../i18n';
import CtaBand from '../components/CtaBand';
import { useDemoRequest } from '../components/DemoRequest';

// Structure (icons, layout) stays here; all prose lives in the copy deck.
// Order must match copy.company.outcomes.
const OUTCOME_ICONS = [<SafetyOutlined key="i" />, <EyeOutlined key="i" />, <FileTextOutlined key="i" />];

/**
 * The page for management companies. Deliberately short: it names the problem
 * and the outcome, and leads to a conversation. How the product works is shown
 * in a demo, not published here.
 */
export default function CompanyPage() {
  const copy = useCopy().company;
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
              {demo.modal}
            </div>
          </div>
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
          <span className="eyebrow">{copy.outcomesEyebrow}</span>
          <h2>{copy.outcomesTitle}</h2>
          <ul className="mini-features mini-features--row">
            {copy.outcomes.map((item, i) => (
              <li className="mini-feature" key={item.title}>
                <div className="mini-feature__icon">{OUTCOME_ICONS[i]}</div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--parchment">
        <div className="container">
          <span className="eyebrow">{copy.nextEyebrow}</span>
          <h2>{copy.nextTitle}</h2>
          <div className="steps">
            {copy.next.map((step, i) => (
              <div className="step" key={step.title}>
                <div className="step__number">{i + 1}</div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand cta={copy.cta} onAction={demo.open} />
    </main>
  );
}

import { useCopy } from '../i18n';
import CtaBand from '../components/CtaBand';

export default function ManifestoPage() {
  const copy = useCopy().manifesto;

  const renderBelief = (b: { title: string; body: string }, index: number) => (
    <div className="belief" key={b.title}>
      <div className="belief__number">{String(index + 1).padStart(2, '0')}</div>
      <div>
        <h3>{b.title}</h3>
        <p>{b.body}</p>
      </div>
    </div>
  );

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
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingBottom: 48 }}>
        <div className="container">{copy.beliefs.slice(0, 3).map((b, i) => renderBelief(b, i))}</div>
      </section>

      <figure className="image-band" style={{ margin: 0 }}>
        <img src="/media/band-courtyard.jpg" alt={copy.bandAlt} loading="lazy" />
        <figcaption>{copy.bandCaption}</figcaption>
      </figure>

      <section className="section" style={{ paddingTop: 48 }}>
        <div className="container">{copy.beliefs.slice(3).map((b, i) => renderBelief(b, i + 3))}</div>
      </section>

      <section className="section--parchment section--tight">
        <div className="container">
          <blockquote className="pull-quote">
            {copy.quote}
            <cite>{copy.quoteCite}</cite>
          </blockquote>
        </div>
      </section>

      <CtaBand cta={copy.cta} />
    </main>
  );
}

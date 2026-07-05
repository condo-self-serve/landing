import CtaBand from '../components/CtaBand';

interface Belief {
  title: string;
  body: string;
}

const BELIEFS: Belief[] = [
  {
    title: 'A condominium is a community, not a cost centre.',
    body:
      'Behind every unit number is a person who chose to live here. The spreadsheet forgets that. We refuse to. Every feature we build starts with the people, not the paperwork.',
  },
  {
    title: 'Busywork is a thief.',
    body:
      'It steals evenings from volunteers, patience from committees, and goodwill from buildings. Every hour spent chasing a receipt is an hour not spent being a neighbour. We build to give that hour back.',
  },
  {
    title: 'Transparency is a form of kindness.',
    body:
      'Most conflict between neighbours isn’t malice — it’s missing information. When the budget is open, the minutes are public and the votes are counted in the light, suspicion has nowhere to grow.',
  },
  {
    title: 'Every voice, not the loudest voice.',
    body:
      'The neighbour who works nights deserves the same say as the one who never misses a meeting. Ballots, proxies and agendas built together mean decisions belong to everyone — including the quiet ones.',
  },
  {
    title: 'Trust is local.',
    body:
      'A five-star review from a stranger is worth less than one sentence from the condo across the road. We move recommendations the way they’ve always really moved: neighbour to neighbour — never through the public internet.',
  },
  {
    title: 'Software should get out of the way.',
    body:
      'The goal was never more time in an app. It’s less. Condoclar succeeds when it disappears — when the meeting ends on time, the fee is simply paid, and nobody has to think about us at all.',
  },
  {
    title: 'Better buildings, block by block.',
    body:
      'When one condominium runs well, it lifts the street. When condos share what they know, they lift each other. A shared home, run with care, is where better neighbourhoods begin.',
  },
];

export default function ManifestoPage() {
  return (
    <main>
      <section className="hero hero--page">
        <div className="hero__media">
          <img
            src="/media/manifesto-evening.jpg"
            alt="A warm apartment building at dusk with lit windows, seen from the street"
            fetchPriority="high"
          />
        </div>
        <div className="container">
          <div className="hero__inner">
            <span className="eyebrow">The Condoclar manifesto</span>
            <h1>Seven things we believe about the places we share</h1>
            <p className="lede">
              We wrote these before we wrote a line of code. When a feature fights them, the
              feature loses.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingBottom: 48 }}>
        <div className="container">
          {BELIEFS.slice(0, 3).map((b, i) => (
            <div className="belief" key={b.title}>
              <div className="belief__number">{String(i + 1).padStart(2, '0')}</div>
              <div>
                <h3>{b.title}</h3>
                <p>{b.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <figure className="image-band" style={{ margin: 0 }}>
        <img
          src="/media/band-laundry.jpg"
          alt="Colourful laundry hanging between two apartment buildings above a narrow street at golden hour"
          loading="lazy"
        />
        <figcaption>The everyday beauty of shared living.</figcaption>
      </figure>

      <section className="section" style={{ paddingTop: 48 }}>
        <div className="container">
          {BELIEFS.slice(3).map((b, i) => (
            <div className="belief" key={b.title}>
              <div className="belief__number">{String(i + 4).padStart(2, '0')}</div>
              <div>
                <h3>{b.title}</h3>
                <p>{b.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section--parchment section--tight">
        <div className="container">
          <blockquote className="pull-quote">
            A condominium is a community. This digital home exists to bring out the best in it —
            removing the busywork, and letting people focus on the good.
            <cite>— The reason Condoclar exists</cite>
          </blockquote>
        </div>
      </section>

      <CtaBand
        title="If you believe this too, you’re already one of us."
        body="Bring these beliefs to your building. We’ll bring the software."
        buttonLabel="Start with your condo"
      />
    </main>
  );
}

import { Button, Collapse } from 'antd';
import { ArrowRightOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { APP_URL, FAQ } from '../siteMeta';
import CtaBand from '../components/CtaBand';

export default function HomePage() {
  return (
    <main>
      {/* ------------------------------------------------ hero */}
      <section className="hero">
        <div className="hero__media">
          <img
            src="/media/hero-courtyard.jpg"
            alt="Neighbours talking and laughing together in the sunlit courtyard of their apartment building"
            fetchPriority="high"
          />
        </div>
        <div className="container">
          <div className="hero__inner">
            <span className="eyebrow">Condoclar</span>
            <h1>
              It’s not just a building.
              <br />
              It’s your home, <span className="accent-underline">shared</span>.
            </h1>
            <p className="lede">
              Condoclar takes the busywork out of running a condominium — the meetings, the money,
              the maintenance — so neighbours can focus on what actually matters: each other.
            </p>
            <div className="hero__actions">
              <Button type="primary" size="large" href={APP_URL} icon={<ArrowRightOutlined />} iconPosition="end">
                Bring your condo together
              </Button>
              <Button size="large" ghost href="/features/">
                See how it works
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ why / golden circle */}
      <section className="section">
        <div className="container">
          <span className="eyebrow">Start with why</span>
          <h2>
            We didn’t set out to build condo software.
            <br />
            We set out to give neighbours their evenings back.
          </h2>
          <p className="lede">
            Every condominium is a community waiting to happen. What stands in the way is rarely
            the people — it’s the paperwork. The chasing, the confusion, the meeting that goes
            nowhere. Remove that, and something remarkable is left: neighbours.
          </p>
          <div className="golden">
            <div className="golden__step golden__step--why">
              <div className="golden__label">Why</div>
              <h3>Because a shared home deserves a shared voice</h3>
              <p>
                We believe the best communities aren’t managed — they’re invited. When everyone can
                see, everyone can speak, and everyone can help, a building becomes a neighbourhood.
              </p>
            </div>
            <div className="golden__step">
              <div className="golden__label">How</div>
              <h3>By making everything visible and every voice count</h3>
              <p>
                Transparent budgets anyone can read. Decisions made by ballot, not by whoever
                shouted last. Trust that flows between neighbouring condos, not from strangers on
                the internet.
              </p>
            </div>
            <div className="golden__step">
              <div className="golden__label">What</div>
              <h3>One calm home for your condominium</h3>
              <p>
                Meetings, votes, budgets, fees, maintenance jobs, documents, monthly reports and a
                vendor directory shared with the condos around you. Everything in one place, in six
                languages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ pull quote */}
      <section className="section--parchment section--tight">
        <div className="container">
          <blockquote className="pull-quote">
            “People don’t buy what you do; they buy why you do it.”
            <cite>— Simon Sinek. Our why: bringing out the best in every community.</cite>
          </blockquote>
        </div>
      </section>

      {/* ------------------------------------------------ small moments */}
      <section className="section">
        <div className="container">
          <span className="eyebrow">The small moments</span>
          <h2>What changes when the busywork disappears</h2>
          <div className="card-grid">
            <div className="story-card">
              <div className="story-card__kicker">Tuesday, 19:00</div>
              <h3>The meeting that ended on time</h3>
              <p>
                The agenda was agreed before anyone sat down. Neighbours upvoted what mattered,
                minutes wrote themselves into the record, and the proxy votes were already counted.
                Everyone was home for dinner — and nothing was left unsaid.
              </p>
            </div>
            <div className="story-card">
              <div className="story-card__kicker">Any day, any unit</div>
              <h3>The budget everyone can finally see</h3>
              <p>
                No more “ask the treasurer”. Every euro in, every euro out, every fee and every
                receipt — visible to every owner, all the time. Transparency isn’t a feature; it’s
                how neighbours stay neighbours.
              </p>
            </div>
            <div className="story-card">
              <div className="story-card__kicker">Two streets over</div>
              <h3>The plumber your neighbours already trust</h3>
              <p>
                The condo across the road found him first. They rated him, noted he’s reliable and
                fair, and — because they’re on Condoclar too — your condo can see it. Good work
                travels by word of mouth. Now it travels next door.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ neighbours teaser */}
      <section className="section section--parchment">
        <div className="container">
          <div className="split">
            <div className="split__media">
              <img
                src="/media/neighbours-vendor.jpg"
                alt="A local tradesperson greeting residents warmly outside their apartment building"
                loading="lazy"
              />
            </div>
            <div>
              <span className="eyebrow">Neighbours helping neighbours</span>
              <h2>Your best recommendation lives next door</h2>
              <p className="prose">
                Condoclar quietly connects your condominium with the ones around it. Vendors your
                neighbouring condos trust appear in your directory — rated by real committees, with
                real work behind them.
              </p>
              <div className="privacy-note">
                <LockOutlined style={{ fontSize: 22, marginTop: 2 }} />
                <span>
                  Shared between condos, <strong>never with the public internet</strong>. Your
                  condo’s notes stay private, and only counts are shown — never your condo’s name.
                </span>
              </div>
              <p style={{ marginTop: 28 }}>
                <Link to="/neighbours/" style={{ fontWeight: 800, fontSize: 17 }}>
                  How the shared vendor directory works <ArrowRightOutlined />
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
            <span className="eyebrow">Questions, answered</span>
            <h2>Fair questions from careful neighbours</h2>
          </div>
          <div className="faq-wrap">
            <Collapse
              ghost
              size="large"
              items={FAQ.map((f, i) => ({
                key: String(i),
                label: <strong>{f.question}</strong>,
                children: <p style={{ fontSize: 17, lineHeight: 1.7, margin: 0 }}>{f.answer}</p>,
              }))}
            />
          </div>
        </div>
      </section>

      <CtaBand
        title="Your neighbours are already home. Meet them there."
        body="Start with one meeting, one vote or one trusted vendor. The community does the rest."
      />
    </main>
  );
}

import { Button } from 'antd';
import {
  ArrowRightOutlined,
  EnvironmentOutlined,
  EyeInvisibleOutlined,
  LockOutlined,
  StarOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import { APP_URL } from '../siteMeta';
import CtaBand from '../components/CtaBand';

export default function NeighboursPage() {
  return (
    <main>
      <section className="hero hero--page">
        <div className="hero__media">
          <img
            src="/media/neighbours-vendor.jpg"
            alt="A friendly local tradesperson being welcomed by residents outside their building"
            fetchPriority="high"
          />
        </div>
        <div className="container">
          <div className="hero__inner">
            <span className="eyebrow">Neighbours helping neighbours</span>
            <h1>Good work travels by word of mouth. Now it travels next door.</h1>
            <p className="lede">
              The best plumber in town isn’t on page one of a search engine. He’s the one the condo
              across the road has trusted for years. Condoclar lets them tell you.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">The old way</span>
          <h2>Every condo solves the same problem alone</h2>
          <p className="prose">
            A pipe bursts. The committee searches, guesses, and hopes. Three quotes from strangers,
            a review site full of people you’ve never met, and a decision made on faith. Meanwhile,
            fifty metres away, another condominium already knows exactly who to call — they just
            have no way to tell you.
          </p>
          <p className="prose">
            That knowledge — who shows up, who charges fairly, who does it right the first time —
            is the most valuable thing a community owns. It shouldn’t evaporate at the property
            line.
          </p>
        </div>
      </section>

      <section className="section section--parchment">
        <div className="container">
          <span className="eyebrow">The Condoclar way</span>
          <h2>A vendor directory owned by the neighbourhood</h2>
          <div className="card-grid">
            <div className="story-card">
              <div className="story-card__kicker"><EnvironmentOutlined /> Nearby, by design</div>
              <h3>Vendors appear when they’re within reach</h3>
              <p>
                Set your condo’s location and your directory fills with tradespeople that condos
                within range already work with — painters, plumbers, builders, gardeners — each
                with distance, contact details and categories.
              </p>
            </div>
            <div className="story-card">
              <div className="story-card__kicker"><StarOutlined /> Rated by committees</div>
              <h3>Ratings from condos, not strangers</h3>
              <p>
                Reviews come from named neighbours in real condominiums who paid real invoices.
                “Quality is OK — but he’s a super nice guy and very reasonably priced” tells you
                more than five anonymous stars ever could.
              </p>
            </div>
            <div className="story-card">
              <div className="story-card__kicker"><TeamOutlined /> Trust, made visible</div>
              <h3>“Three condos work with them”</h3>
              <p>
                Each condo can mark a vendor as one they work with. Others see the count — a quiet,
                powerful signal — while your condo’s name is never shown.
              </p>
            </div>
            <div className="story-card">
              <div className="story-card__kicker"><LockOutlined /> Private notes</div>
              <h3>Your condo’s knowledge stays yours</h3>
              <p>
                Who to call, agreed prices, what to watch out for — private notes only your condo
                can see, attached to the shared record.
              </p>
            </div>
            <div className="story-card">
              <div className="story-card__kicker"><EyeInvisibleOutlined /> Never public</div>
              <h3>Shared with neighbours, not the internet</h3>
              <p>
                Nothing here is published to the open web. Ratings and recommendations flow only
                between condominiums on Condoclar — a commons for communities, not content for
                crawlers.
              </p>
            </div>
            <div className="story-card">
              <div className="story-card__kicker"><StarOutlined /> Proof of work</div>
              <h3>A track record you can see</h3>
              <p>
                When a condo links a vendor to a maintenance job and completes it, the work — with
                photos — becomes part of the vendor’s history. Not promises. Finished jobs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="split">
            <div>
              <span className="eyebrow">Why it matters</span>
              <h2>Strong buildings make strong streets</h2>
              <p className="prose">
                Every rating you leave saves a neighbouring committee an evening of anxious
                googling. Every vendor you add makes the next burst pipe a smaller crisis for
                someone you may never meet. This is what community looks like at the scale of a
                postcode: small acts of shared knowledge, compounding quietly.
              </p>
              <p className="prose">
                And it’s good for the tradespeople too — the ones who show up on time and do honest
                work get what they’ve always deserved: a reputation that spreads.
              </p>
              <Button type="primary" size="large" href={APP_URL} icon={<ArrowRightOutlined />} iconPosition="end">
                Add your condo’s trusted vendors
              </Button>
            </div>
            <div className="split__media">
              <img
                src="/media/hero-courtyard.jpg"
                alt="Neighbours gathered happily in their shared courtyard at golden hour"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Be the neighbour who found the good one."
        body="Your condo’s trusted vendors could save the building next door a very bad week. Share them."
        buttonLabel="Start your directory"
      />
    </main>
  );
}

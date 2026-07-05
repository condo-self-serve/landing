import { Button } from 'antd';
import {
  ArrowRightOutlined,
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

      <section className="section section--parchment" style={{ paddingTop: 72 }}>
        <div className="container">
          <span className="eyebrow">The Condoclar way</span>
          <h2>How the shared directory works</h2>
          <div className="steps">
            <div className="step">
              <div className="step__number">01</div>
              <h3>Add — or simply discover</h3>
              <p>
                Add the vendors your condo already trusts, with contact details and where they’re
                based. Set your condo’s location, and tradespeople that condos within range work
                with appear in your directory automatically — with distance, categories and ways to
                reach them.
              </p>
            </div>
            <div className="step">
              <div className="step__number">02</div>
              <h3>Rate, and mark who you work with</h3>
              <p>
                After the work is done, leave a rating in plain words — signed with your name and
                condo, the way you’d tell a neighbour over coffee. Mark the vendor as one your
                condo works with; keep private notes (who to call, agreed prices) that only your
                condo sees.
              </p>
            </div>
            <div className="step">
              <div className="step__number">03</div>
              <h3>The whole street benefits</h3>
              <p>
                Nearby condos see the rating, the “condos work with them” count and the finished
                jobs — and you see theirs. Every review saves a committee somewhere an evening of
                anxious googling. Trust compounds, block by block.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="split">
            <div className="split__media">
              <img
                src="/media/craft-hands.jpg"
                alt="The skilled hands of a craftsman carefully repairing the hinge of an old wooden door"
                loading="lazy"
              />
            </div>
            <div>
              <span className="eyebrow">Proof of work</span>
              <h2>Not promises. Finished jobs.</h2>
              <p className="prose">
                When a condo links a vendor to a maintenance job and completes it, that work — with
                photos — becomes part of the vendor’s history. A track record built from real
                invoices and real buildings, not marketing.
              </p>
              <p className="prose">
                It’s good for the tradespeople too. The ones who show up on time and do honest work
                finally get what they’ve always deserved: a reputation that spreads.
              </p>
              <Button type="primary" size="large" href={APP_URL} icon={<ArrowRightOutlined />} iconPosition="end">
                Add your condo’s trusted vendors
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--parchment">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <span className="eyebrow">Built on trust, wrapped in privacy</span>
            <h2>Shared with neighbours. Never with the internet.</h2>
          </div>
          <div className="card-grid card-grid--two">
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
              <h3>A commons, not content</h3>
              <p>
                Nothing here is published to the open web. Ratings and recommendations flow only
                between condominiums on Condoclar — a commons for communities, not content for
                crawlers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <figure className="image-band" style={{ margin: 0 }}>
        <img
          src="/media/band-balcony.jpg"
          alt="A woman lowering a basket of lemons from her balcony to a smiling neighbour below"
          loading="lazy"
        />
        <figcaption>This is how trust has always moved. We just gave it a directory.</figcaption>
      </figure>

      <CtaBand
        title="Be the neighbour who found the good one."
        body="Your condo’s trusted vendors could save the building next door a very bad week. Share them."
        buttonLabel="Start your directory"
      />
    </main>
  );
}

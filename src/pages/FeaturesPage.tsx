import {
  AuditOutlined,
  CalendarOutlined,
  CheckSquareOutlined,
  EuroCircleOutlined,
  FileProtectOutlined,
  FileTextOutlined,
  GlobalOutlined,
  NotificationOutlined,
  ShopOutlined,
  TeamOutlined,
  ToolOutlined,
} from '@ant-design/icons';
import CtaBand from '../components/CtaBand';

interface MiniFeature {
  icon: React.ReactNode;
  title: string;
  body: React.ReactNode;
}

interface Cluster {
  eyebrow: string;
  title: string;
  intro: string;
  image: { src: string; alt: string };
  reverse?: boolean;
  features: MiniFeature[];
}

const CLUSTERS: Cluster[] = [
  {
    eyebrow: 'Decide together',
    title: 'Meetings and votes that belong to everyone',
    intro:
      'The condo meeting is where community is made or lost. Condoclar makes it something neighbours look forward to — short, fair, and finished on time.',
    image: {
      src: '/media/feature-meeting.jpg',
      alt: 'Neighbours of all ages having a relaxed meeting on a rooftop terrace at sunset',
    },
    features: [
      {
        icon: <CalendarOutlined />,
        title: 'Meetings that respect everyone’s evening',
        body: (
          <>
            Neighbours propose agenda items and upvote what matters. RSVPs, proxy voting, calendar
            invites and minutes recorded forever. <strong>So the meeting is about deciding, not
            arguing about what to discuss.</strong>
          </>
        ),
      },
      {
        icon: <CheckSquareOutlined />,
        title: 'Votes and ballots, done properly',
        body: (
          <>
            Formal votes with real ballots, clear outcomes and a permanent record — including the
            owners who couldn’t make it to the room. <strong>So decisions are made by the
            community, not by whoever stayed latest.</strong>
          </>
        ),
      },
    ],
  },
  {
    eyebrow: 'Money in the open',
    title: 'Finances every neighbour can read',
    intro:
      'Most tension in a condominium is really about money nobody can see. Condoclar puts every euro in daylight — and takes the awkward conversations off people’s shoulders.',
    image: {
      src: '/media/finances-table.jpg',
      alt: 'Two neighbours calmly reviewing their condominium budget together at a kitchen table',
    },
    reverse: true,
    features: [
      {
        icon: <EuroCircleOutlined />,
        title: 'Budgets everyone can read',
        body: (
          <>
            Categories, transactions and running totals in plain sight, with CSV import and a
            preview before anything is committed. <strong>So “where does the money go?” is a
            question nobody needs to ask.</strong>
          </>
        ),
      },
      {
        icon: <AuditOutlined />,
        title: 'Fees without the awkwardness',
        body: (
          <>
            Fee schedules, payment tracking and a clear overview of who has paid — handled by the
            system, not by a neighbour knocking on doors. <strong>So money never has to come
            between neighbours.</strong>
          </>
        ),
      },
      {
        icon: <FileProtectOutlined />,
        title: 'Documents, safe and findable',
        body: (
          <>
            Contracts, financial documents and files in one place with visibility controls decided
            by your condo. <strong>So the answer is never “it’s in someone’s drawer at
            home”.</strong>
          </>
        ),
      },
      {
        icon: <FileTextOutlined />,
        title: 'Monthly reports, written for humans',
        body: (
          <>
            A clear monthly summary of activity, finances and decisions — generated for you.
            <strong> So everyone stays informed without anyone doing the informing.</strong>
          </>
        ),
      },
    ],
  },
  {
    eyebrow: 'Care for the building',
    title: 'From “someone should…” to done',
    intro:
      'A building stays loved when small problems get fixed early, by people you trust. Condoclar turns maintenance from a burden into a rhythm.',
    image: {
      src: '/media/care-painter.jpg',
      alt: 'A painter repainting shutters of an apartment building while a resident chats with him',
    },
    features: [
      {
        icon: <ToolOutlined />,
        title: 'Maintenance jobs with a memory',
        body: (
          <>
            Report a problem, discuss it, vote on priorities, link a trusted vendor and track the
            job to completion — with photos of the finished work. <strong>So small problems get
            fixed before they become big ones.</strong>
          </>
        ),
      },
      {
        icon: <ShopOutlined />,
        title: 'A vendor directory shared with condos near you',
        body: (
          <>
            Tradespeople recommended and rated by real neighbouring condominiums — privately, never
            on the public internet. <strong>So you hire on your neighbours’ word, not a stranger’s
            review.</strong>
          </>
        ),
      },
    ],
  },
  {
    eyebrow: 'Room for everyone',
    title: 'A community that’s easy to join and easy to hear',
    intro:
      'Software only builds community if every neighbour can take part — whatever their language, schedule or patience for apps.',
    image: {
      src: '/media/belong-steps.jpg',
      alt: 'Neighbours of different generations sharing food on the front steps of their building',
    },
    reverse: true,
    features: [
      {
        icon: <TeamOutlined />,
        title: 'Members, invitations and join links',
        body: (
          <>
            Invite by email or share a join link — one tap and they’re in, with roles that keep
            duties clear. <strong>So joining is the easiest thing your building does.</strong>
          </>
        ),
      },
      {
        icon: <NotificationOutlined />,
        title: 'Notifications that respect attention',
        body: (
          <>
            Each neighbour chooses what to be told about and how. <strong>So the app works for you
            — never the other way round.</strong>
          </>
        ),
      },
      {
        icon: <GlobalOutlined />,
        title: 'Six languages, one community',
        body: (
          <>
            English, Português, Español, Français, Italiano and Deutsch. <strong>So language is
            never the reason someone stays quiet.</strong>
          </>
        ),
      },
    ],
  },
];

export default function FeaturesPage() {
  return (
    <main>
      <section className="hero hero--page">
        <div className="hero__media">
          <img
            src="/media/feature-meeting.jpg"
            alt="Residents of a condominium having a relaxed, friendly meeting together"
            fetchPriority="high"
          />
        </div>
        <div className="container">
          <div className="hero__inner">
            <span className="eyebrow">What Condoclar does</span>
            <h1>Everything your condo needs. Nothing it doesn’t.</h1>
            <p className="lede">
              Each feature exists for one reason: to hand time and goodwill back to your community.
              Here’s the full picture — and why each piece matters.
            </p>
          </div>
        </div>
      </section>

      {CLUSTERS.map((cluster) => (
        <section className="cluster" key={cluster.eyebrow}>
          <div className="container">
            <div className={`split${cluster.reverse ? ' split--reverse' : ''}`}>
              <div className="split__media">
                <img src={cluster.image.src} alt={cluster.image.alt} loading="lazy" />
              </div>
              <div>
                <span className="eyebrow">{cluster.eyebrow}</span>
                <h2>{cluster.title}</h2>
                <p className="cluster__intro">{cluster.intro}</p>
                <ul className="mini-features">
                  {cluster.features.map((f) => (
                    <li className="mini-feature" key={f.title}>
                      <div className="mini-feature__icon">{f.icon}</div>
                      <div>
                        <h3>{f.title}</h3>
                        <p>{f.body}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="section--parchment section--tight">
        <div className="container">
          <blockquote className="pull-quote">
            Software should disappear into the background, the way good plumbing does. You notice
            it only by the calm it leaves behind.
          </blockquote>
        </div>
      </section>

      <CtaBand
        title="Less admin. More neighbourhood."
        body="Start with the feature your condo needs most — the rest will be waiting when you’re ready."
      />
    </main>
  );
}

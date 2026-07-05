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

interface Feature {
  icon: React.ReactNode;
  title: string;
  body: string;
  so: string;
}

const FEATURES: Feature[] = [
  {
    icon: <CalendarOutlined />,
    title: 'Meetings that respect everyone’s evening',
    body:
      'Build the agenda together — neighbours propose items and upvote what matters most. RSVPs, proxy voting for those who can’t attend, calendar invites, and minutes recorded where everyone can find them, forever.',
    so: 'So the meeting is about deciding, not arguing about what to discuss.',
  },
  {
    icon: <CheckSquareOutlined />,
    title: 'Votes and ballots, done properly',
    body:
      'Formal votes with real ballots, clear outcomes and a permanent record. Every owner gets a voice — including the ones who couldn’t make it to the room.',
    so: 'So decisions are made by the community, not by whoever stayed latest.',
  },
  {
    icon: <EuroCircleOutlined />,
    title: 'Budgets everyone can read',
    body:
      'Categories, transactions and running totals in plain sight. Import your existing accounts from CSV in minutes — with a preview before anything is committed.',
    so: 'So “where does the money go?” is a question nobody needs to ask.',
  },
  {
    icon: <AuditOutlined />,
    title: 'Fees without the awkwardness',
    body:
      'Fee schedules, payment tracking and a clear overview of who has paid — handled by the system, not by a neighbour knocking on doors.',
    so: 'So money never has to come between neighbours.',
  },
  {
    icon: <ToolOutlined />,
    title: 'Maintenance jobs, from “someone should…” to done',
    body:
      'Report a problem, discuss it in comments, vote on priorities, link a trusted vendor and track the job to completion — with photos of the finished work.',
    so: 'So small problems get fixed before they become big ones.',
  },
  {
    icon: <ShopOutlined />,
    title: 'A vendor directory shared with condos near you',
    body:
      'Tradespeople recommended and rated by real neighbouring condominiums. See who works with them and how the work went — privately, never on the public internet. Your condo’s notes stay yours.',
    so: 'So you hire on your neighbours’ word, not a stranger’s review.',
  },
  {
    icon: <FileProtectOutlined />,
    title: 'Documents and financial records, safe and findable',
    body:
      'Contracts, financial documents and files stored in one place with sensible visibility controls — decided by your condo, for your condo.',
    so: 'So the answer is never “it’s in someone’s drawer at home”.',
  },
  {
    icon: <FileTextOutlined />,
    title: 'Monthly reports, written for humans',
    body:
      'A clear monthly summary of activity, finances and decisions — generated for you, readable by everyone, from the newest owner to the oldest hand.',
    so: 'So everyone stays informed without anyone doing the informing.',
  },
  {
    icon: <TeamOutlined />,
    title: 'Members, invitations and join links',
    body:
      'Invite neighbours by email or share a join link — one tap and they’re in. Roles keep admin duties clear without creating hierarchies.',
    so: 'So joining the community is the easiest thing your building does.',
  },
  {
    icon: <NotificationOutlined />,
    title: 'Notifications that respect your attention',
    body:
      'Each neighbour chooses what to be told about and how. Important things arrive; noise doesn’t.',
    so: 'So the app works for you — never the other way round.',
  },
  {
    icon: <GlobalOutlined />,
    title: 'Six languages, one community',
    body:
      'English, Português, Español, Français, Italiano and Deutsch. Every neighbour participates in the language they think in.',
    so: 'So language is never the reason someone stays quiet.',
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

      <section className="section">
        <div className="container">
          {FEATURES.map((f) => (
            <div className="feature-row" key={f.title}>
              <div className="feature-row__icon">{f.icon}</div>
              <div>
                <h3>{f.title}</h3>
                <p>
                  {f.body}
                  <span className="feature-row__so">{f.so}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

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

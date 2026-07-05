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
import { useCopy } from '../i18n';
import CtaBand from '../components/CtaBand';

// Structure (images, icons, layout) stays here; all prose lives in the copy
// decks. Order must match copy.features.clusters and each cluster's features.
const CLUSTER_MEDIA = [
  { src: '/media/app-vote.webp', appShot: true, reverse: false },
  { src: '/media/app-fees.webp', appShot: true, reverse: true },
  { src: '/media/app-jobs.webp', appShot: true, reverse: false },
  { src: '/media/belong-steps.jpg', appShot: false, reverse: true },
];

const CLUSTER_ICONS = [
  [<CalendarOutlined key="i" />, <CheckSquareOutlined key="i" />],
  [<EuroCircleOutlined key="i" />, <AuditOutlined key="i" />, <FileProtectOutlined key="i" />, <FileTextOutlined key="i" />],
  [<ToolOutlined key="i" />, <ShopOutlined key="i" />],
  [<TeamOutlined key="i" />, <NotificationOutlined key="i" />, <GlobalOutlined key="i" />],
];

export default function FeaturesPage() {
  const copy = useCopy().features;

  return (
    <main>
      <section className="hero hero--page">
        <div className="hero__media">
          <img src="/media/feature-meeting.jpg" alt={copy.heroAlt} fetchPriority="high" />
        </div>
        <div className="container">
          <div className="hero__inner">
            <span className="eyebrow">{copy.heroEyebrow}</span>
            <h1>{copy.heroTitle}</h1>
            <p className="lede">{copy.heroLede}</p>
          </div>
        </div>
      </section>

      {copy.clusters.map((cluster, ci) => {
        const media = CLUSTER_MEDIA[ci];
        return (
          <section className="cluster" key={cluster.eyebrow}>
            <div className="container">
              <div className={`split${media.reverse ? ' split--reverse' : ''}`}>
                <div className={`split__media${media.appShot ? ' split__media--app' : ''}`}>
                  <img src={media.src} alt={cluster.imageAlt} loading="lazy" />
                </div>
                <div>
                  <span className="eyebrow">{cluster.eyebrow}</span>
                  <h2>{cluster.title}</h2>
                  <p className="cluster__intro">{cluster.intro}</p>
                  <ul className="mini-features">
                    {cluster.features.map((f, fi) => (
                      <li className="mini-feature" key={f.title}>
                        <div className="mini-feature__icon">{CLUSTER_ICONS[ci][fi]}</div>
                        <div>
                          <h3>{f.title}</h3>
                          <p>
                            {f.body} <strong>{f.so}</strong>
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

      <section className="section--parchment section--tight">
        <div className="container">
          <blockquote className="pull-quote">{copy.quote}</blockquote>
        </div>
      </section>

      <CtaBand cta={copy.cta} />
    </main>
  );
}

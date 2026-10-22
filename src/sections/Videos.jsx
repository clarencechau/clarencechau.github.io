import site from "../site.config.js";
import Section from "../components/Section.jsx";
import Icon from "../components/Icon.jsx";
import { compactNumber, getYouTubeId, useYouTubeStats } from "../lib/hooks.js";
import "./Videos.css";

export default function Videos({ id, index }) {
  const v = site.videos;
  const items = v.items.map((item) => {
    const videoId = getYouTubeId(item.url);
    return {
      ...item,
      videoId,
      // Fall back to YouTube's own thumbnail if you don't provide one.
      thumb: item.thumbnail || (videoId ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` : ""),
    };
  });
  const stats = useYouTubeStats(items.map((i) => i.videoId));

  // Most-viewed first once live counts arrive; otherwise keep the config order.
  // (Array.sort is stable, so videos without stats keep their relative order.)
  const ordered =
    v.sortBy === "views" && Object.keys(stats).length > 0
      ? [...items].sort((a, b) => (stats[b.videoId]?.views ?? -1) - (stats[a.videoId]?.views ?? -1))
      : items;

  const channelLink = v.channelUrl && (
    <a href={v.channelUrl} target="_blank" rel="noreferrer" className="btn btn--ghost btn--sm">
      <Icon name="youtube" /> Visit channel
    </a>
  );

  return (
    <Section id={id} index={index} eyebrow={v.eyebrow} title={v.title} aside={channelLink}>
      <ul className="videos">
        {ordered.map((item) => {
          const s = stats[item.videoId];
          return (
            <li key={item.url} className="reveal">
              <a href={item.url} target="_blank" rel="noreferrer" className="card video">
                <div className="video__thumb">
                  <img src={item.thumb} alt="" loading="lazy" />
                  <span className="video__play" aria-hidden="true">
                    <Icon name="play" size={22} />
                  </span>
                </div>
                <div className="video__body">
                  <h3 className="video__title">{item.title}</h3>
                  {s && (
                    <p className="video__stats">
                      <span>
                        <Icon name="eye" /> {compactNumber(s.views)} views
                      </span>
                      <span>
                        <Icon name="like" /> {compactNumber(s.likes)}
                      </span>
                    </p>
                  )}
                  {item.description && <p className="video__desc">{item.description}</p>}
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}

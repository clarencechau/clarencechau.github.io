import { useCallback, useEffect, useState } from "react";

/* ── Theme (light / dark) ───────────────────────────────────────────────── */

const systemMode = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

export function useTheme(defaultMode = "system") {
  const [mode, setMode] = useState(
    () => document.documentElement.dataset.theme || (defaultMode === "system" ? systemMode() : defaultMode),
  );

  useEffect(() => {
    document.documentElement.dataset.theme = mode;
  }, [mode]);

  // Follow the OS setting until the visitor picks a theme themselves.
  useEffect(() => {
    if (localStorage.getItem("theme") || defaultMode !== "system") return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => setMode(systemMode());
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [defaultMode]);

  const toggle = useCallback(() => {
    setMode((m) => {
      const next = m === "dark" ? "light" : "dark";
      localStorage.setItem("theme", next);
      return next;
    });
  }, []);

  return { mode, toggle };
}

/* ── Scroll-reveal ──────────────────────────────────────────────────────── */

/** Adds `is-visible` to every `.reveal` element once it scrolls into view. */
export function useRevealOnScroll(enabled = true) {
  useEffect(() => {
    const root = document.documentElement;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!enabled || reduced || !("IntersectionObserver" in window)) {
      root.classList.remove("has-reveal");
      return;
    }
    root.classList.add("has-reveal");
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [enabled]);
}

/* ── Active nav section ─────────────────────────────────────────────────── */

export function useActiveSection(ids) {
  const [active, setActive] = useState(null);
  const key = ids.join(",");
  useEffect(() => {
    // Also watch the hero (#top) so nothing is highlighted at the top of the page.
    const els = ["top", ...ids].map((id) => document.getElementById(id)).filter(Boolean);
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) {
          const id = visible[0].target.id;
          setActive(id === "top" ? null : id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);
  return active;
}

/* ── Scrolled past top? (for the nav background) ────────────────────────── */

export function useScrolled(offset = 12) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > offset);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [offset]);
  return scrolled;
}

/* ── YouTube stats ──────────────────────────────────────────────────────── */

export function getYouTubeId(url) {
  try {
    const u = new URL(url);
    if (u.hostname === "youtu.be") return u.pathname.slice(1);
    if (u.searchParams.get("v")) return u.searchParams.get("v");
    const m = u.pathname.match(/\/(shorts|embed|live)\/([^/?]+)/);
    return m ? m[2] : null;
  } catch {
    return null;
  }
}

const YT_KEY = import.meta.env.VITE_YOUTUBE_API_KEY || import.meta.env.REACT_APP_YOUTUBE_API_KEY;

/** One batched request for all videos. Returns { [id]: { views, likes } }. */
export function useYouTubeStats(ids) {
  const [stats, setStats] = useState({});
  const key = ids.filter(Boolean).join(",");

  useEffect(() => {
    if (!YT_KEY || !key) return;
    const controller = new AbortController();
    fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${encodeURIComponent(key)}&key=${YT_KEY}`,
      { signal: controller.signal },
    )
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((data) => {
        const out = {};
        for (const item of data.items ?? []) {
          out[item.id] = {
            views: Number(item.statistics?.viewCount ?? 0),
            likes: Number(item.statistics?.likeCount ?? 0),
          };
        }
        setStats(out);
      })
      .catch(() => {
        /* Stats are a nice-to-have — fail quietly. */
      });
    return () => controller.abort();
  }, [key]);

  return stats;
}

export const compactNumber = (n) =>
  new Intl.NumberFormat("en", { notation: "compact", maximumFractionDigits: 1 }).format(n);

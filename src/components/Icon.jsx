import {
  FaLinkedinIn, FaGithub, FaYoutube, FaInstagram, FaXTwitter, FaJava, FaTiktok, FaDiscord,
} from "react-icons/fa6";
import {
  SiReact, SiTypescript, SiJavascript, SiMysql, SiFirebase, SiPostman, SiHtml5, SiCss,
  SiPython, SiNextdotjs, SiMongodb, SiDocker, SiApachespark, SiApacheairflow, SiPandas,
  SiNodedotjs, SiGraphql, SiTailwindcss, SiFigma, SiGit, SiPostgresql, SiShopify,
} from "react-icons/si";
import {
  LuSun, LuMoon, LuArrowUpRight, LuArrowRight, LuArrowUp, LuMapPin, LuMail, LuCopy, LuCheck,
  LuMenu, LuX, LuPlay, LuEye, LuThumbsUp, LuTrophy, LuMedal, LuCode, LuDatabase, LuSend,
  LuFileText, LuSparkles, LuGlobe, LuLoaderCircle, LuGraduationCap, LuBriefcase,
} from "react-icons/lu";

/**
 * Every icon name you can use in site.config.js.
 * Want another? Find it on https://react-icons.github.io/react-icons,
 * import it above and add it here.
 */
const ICONS = {
  // socials
  linkedin: FaLinkedinIn, github: FaGithub, youtube: FaYoutube, instagram: FaInstagram,
  x: FaXTwitter, twitter: FaXTwitter, tiktok: FaTiktok, discord: FaDiscord,
  email: LuMail, mail: LuMail, website: LuGlobe,
  // tech
  react: SiReact, typescript: SiTypescript, javascript: SiJavascript, java: FaJava,
  mysql: SiMysql, sql: SiMysql, postgres: SiPostgresql, firebase: SiFirebase, postman: SiPostman,
  html: SiHtml5, css: SiCss, python: SiPython, nextjs: SiNextdotjs, mongodb: SiMongodb,
  docker: SiDocker, spark: SiApachespark, airflow: SiApacheairflow, pandas: SiPandas,
  node: SiNodedotjs, graphql: SiGraphql, tailwind: SiTailwindcss, figma: SiFigma, git: SiGit,
  shopify: SiShopify, database: LuDatabase,
  // ui
  sun: LuSun, moon: LuMoon, "arrow-up-right": LuArrowUpRight, "arrow-right": LuArrowRight,
  "arrow-up": LuArrowUp, pin: LuMapPin, copy: LuCopy, check: LuCheck, menu: LuMenu, close: LuX,
  play: LuPlay, eye: LuEye, like: LuThumbsUp, trophy: LuTrophy, medal: LuMedal, code: LuCode,
  send: LuSend, resume: LuFileText, sparkles: LuSparkles, spinner: LuLoaderCircle,
  school: LuGraduationCap, work: LuBriefcase,
};

export default function Icon({ name, size = "1em", ...props }) {
  const Component = ICONS[name];
  if (!Component) {
    if (import.meta.env.DEV) console.warn(`[Icon] Unknown icon "${name}". Add it in src/components/Icon.jsx`);
    return null;
  }
  return <Component size={size} aria-hidden="true" focusable="false" {...props} />;
}

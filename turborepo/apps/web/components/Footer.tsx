"use client";

import { useTranslation } from "@/lib/i18n";

export default function Footer() {
  const t = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer style={footerStyle}>
      <div style={panelStyle}>
        <div aria-hidden="true" style={backgroundStyle}>
          <div style={paperGlowStyle} />
          <div style={paperShadowStyle} />
          <div style={shimmerStyle} />
          <div style={topRuleStyle} />
          <div style={bottomRuleStyle} />

          <svg
            viewBox="0 0 1200 220"
            preserveAspectRatio="none"
            style={ornamentSvgStyle}
          >
            <path
              d="M 110 54 C 146 34, 190 34, 228 54 C 248 64, 274 70, 314 70"
              style={ornamentStyle}
            />
            <path
              d="M 1090 54 C 1054 34, 1010 34, 972 54 C 952 64, 926 70, 886 70"
              style={ornamentStyle}
            />
            <path
              d="M 110 166 C 146 186, 190 186, 228 166 C 248 156, 274 150, 314 150"
              style={ornamentStyle}
            />
            <path
              d="M 1090 166 C 1054 186, 1010 186, 972 166 C 952 156, 926 150, 886 150"
              style={ornamentStyle}
            />
          </svg>

          <div style={dustStyle} />
        </div>

        <div style={contentStyle}>
          <p style={titleStyle}>
            {t("footerCopyright").replace("{year}", String(year))}
          </p>

          <p style={creditStyle}>
            {t("footerMaintainedBy")}{" "}
            <a
              href="https://www.tibia.com/community/?subtopic=characters&name=Distanceless"
              target="_blank"
              rel="noopener noreferrer"
              style={creatorLinkStyle}
            >
              Distanceless
            </a>
            .
          </p>

          <p style={copyStyle}>
            <a
              href="https://www.tibia.com"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              Tibia
            </a>{" "}
            {t("footerIsA")}{" "}
            <a
              href="https://www.cipsoft.com"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              CipSoft GmbH
            </a>
            . {t("footerAllContent")}{" "}
            <a
              href="https://www.tibia.com"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              Tibia.com
            </a>{" "}
            /{" "}
            <a
              href="https://www.cipsoft.com"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              CipSoft GmbH
            </a>
            . {t("footerNotAffiliated")}
          </p>
        </div>
      </div>
    </footer>
  );
}

const footerStyle: React.CSSProperties = {
  marginTop: "3rem",
  padding: "0 1rem 1.75rem",
};

const panelStyle: React.CSSProperties = {
  position: "relative",
  overflow: "hidden",
  maxWidth: "980px",
  margin: "0 auto",
  border: "1px solid rgba(var(--border), 0.82)",
  borderRadius: "1.1rem",
  background: `
        linear-gradient(180deg, rgba(var(--panel), 0.98), rgba(var(--panel-strong), 0.98)),
        radial-gradient(circle at top, rgba(var(--accent-gold), 0.08), transparent 52%)
    `,
  boxShadow: "0 16px 40px rgba(0, 0, 0, 0.16)",
};

const backgroundStyle: React.CSSProperties = {
  position: "absolute",
  inset: 0,
  pointerEvents: "none",
};

const paperGlowStyle: React.CSSProperties = {
  position: "absolute",
  inset: "-12%",
  background:
    "radial-gradient(circle at 50% 0%, rgba(var(--accent-gold), 0.10), transparent 48%)",
};

const paperShadowStyle: React.CSSProperties = {
  position: "absolute",
  inset: 0,
  background:
    "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(0,0,0,0.04))",
  opacity: 0.55,
};

const shimmerStyle: React.CSSProperties = {
  position: "absolute",
  inset: "0 auto 0 -18%",
  width: "36%",
  transform: "skewX(-24deg)",
  background:
    "linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)",
  opacity: 0.35,
};

const topRuleStyle: React.CSSProperties = {
  position: "absolute",
  top: "16px",
  left: "28px",
  right: "28px",
  height: "1px",
  background:
    "linear-gradient(90deg, transparent, rgba(var(--accent-gold), 0.45), transparent)",
};

const bottomRuleStyle: React.CSSProperties = {
  position: "absolute",
  bottom: "16px",
  left: "28px",
  right: "28px",
  height: "1px",
  background:
    "linear-gradient(90deg, transparent, rgba(var(--accent-gold), 0.28), transparent)",
};

const ornamentSvgStyle: React.CSSProperties = {
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  opacity: 0.55,
};

const ornamentStyle: React.CSSProperties = {
  fill: "none",
  stroke: "rgba(var(--accent-gold), 0.26)",
  strokeWidth: 2.1,
  strokeLinecap: "round",
};

const dustStyle: React.CSSProperties = {
  position: "absolute",
  inset: 0,
  opacity: 0.08,
  backgroundImage: `
        radial-gradient(circle at 18% 32%, rgba(255,255,255,0.9) 0 1px, transparent 1.5px),
        radial-gradient(circle at 74% 38%, rgba(255,255,255,0.85) 0 1px, transparent 1.5px),
        radial-gradient(circle at 35% 70%, rgba(255,255,255,0.75) 0 1px, transparent 1.5px),
        radial-gradient(circle at 82% 72%, rgba(255,255,255,0.7) 0 1px, transparent 1.5px)
    `,
};

const contentStyle: React.CSSProperties = {
  position: "relative",
  zIndex: 1,
  padding: "1.7rem 1.1rem",
  textAlign: "center",
  fontSize: "0.76rem",
  color: "rgb(var(--muted))",
  lineHeight: 1.75,
};

const titleStyle: React.CSSProperties = {
  margin: "0 0 0.45rem 0",
  fontWeight: 700,
  color: "rgb(var(--text))",
  letterSpacing: "0.01em",
};

const creditStyle: React.CSSProperties = {
  margin: "0 0 0.6rem 0",
  color: "rgb(var(--soft))",
  fontSize: "0.8rem",
};

const copyStyle: React.CSSProperties = {
  margin: 0,
  maxWidth: "620px",
  marginInline: "auto",
};

const linkStyle: React.CSSProperties = {
  color: "rgb(var(--accent))",
  textDecoration: "none",
  fontWeight: 600,
};

const creatorLinkStyle: React.CSSProperties = {
  color: "rgb(var(--accent))",
  textDecoration: "none",
  fontWeight: 700,
};

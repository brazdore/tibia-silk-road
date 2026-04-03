"use client";

import Image from "next/image";
import { useTranslation } from "@/lib/i18n";

export default function PageHeader() {
  const t = useTranslation();
  return (
    <header style={{ textAlign: "center", marginBottom: "2rem" }}>
      <div
        style={{
          width: "min(100%, 240px)",
          margin: "0 auto 0.65rem",
        }}
      >
        <Image
          src="/logo-tsr-beeg.png"
          alt="Tibia Silk Road logo"
          width={2400}
          height={1440}
          priority
          style={{
            width: "100%",
            height: "auto",
            display: "block",
          }}
        />
      </div>
      <p style={{ color: "rgb(var(--muted))" }} className="mt-1 text-xs">
        {t("siteTagline")}
      </p>
    </header>
  );
}

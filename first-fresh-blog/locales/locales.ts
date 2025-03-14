// nav
/// imports
import esNav from "../locales/es/nav.json" with { type: "json" };
import koNav from "../locales/ko/nav.json" with { type: "json" };
import enNav from "../locales/en/nav.json" with { type: "json" };

/// exports
export type navContentType = typeof koNav;
export const navContentRecord: Record<string, navContentType> = {
  "/": koNav,
  "/ko": koNav,
  "/en": enNav,
  "/es": esNav,
};

// hero
/// imports
import koHero from "../locales/ko/hero.json" with { type: "json" };
import esHero from "../locales/es/hero.json" with { type: "json" };
import enHero from "../locales/en/hero.json" with { type: "json" };

/// exports
export type heroContentType = typeof koHero;
export const heroContentRecord: Record<string, heroContentType> = {
  "/": koHero,
  "/ko": koHero,
  "/en": enHero,
  "/es": esHero,
};

// tech
/// imports
import koTech from "../locales/ko/tech.json" with { type: "json" };
import esTech from "../locales/es/tech.json" with { type: "json" };
import enTech from "../locales/en/tech.json" with { type: "json" };

/// exports
export type techContentType = typeof koTech;
export const techContentRecord: Record<string, techContentType> = {
  "/": koTech,
  "/ko": koTech,
  "/en": enTech,
  "/es": esTech,
};

export type localesContentsType = {
  navContent: navContentType;
  heroContent: heroContentType;
  techContent: techContentType;
};

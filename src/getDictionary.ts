const locales = ["en", "de"];

const dictionaries: Record<string, () => Promise<IntlMessages>> = {
  en: () => import("../dictionaries/en.json").then((r) => r.default),
  es: () => import("../dictionaries/es.json").then((r) => r.default),
};

export const getDictionary = (lang: string) => {
  return dictionaries[lang]();
};

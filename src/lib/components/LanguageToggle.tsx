import { Emoji } from "./Emoji";
import { FC } from "react";
import { useTranslation } from "react-i18next";

export type LanguageToggleProps = {
  className: string;
};

export const LanguageToggle: FC<LanguageToggleProps> = (props) => {
  const {i18n}=useTranslation()
  const languageMap: Record<string, string> = {
    en: "🇮🇪",
    de: "🇩🇪",
    no: "🇳🇴",
  };

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  const locales = i18n.languages || [];

  return (
    <div className={`flex flex-row justify-around ${props.className}`}>
      {locales.map((lng) => {
        return (
          <div
            className="m-auto cursor-pointer"
            key={lng}
            onClick={() => i18n.changeLanguage(lng)}
          >
            <Emoji symbol={languageMap[lng]} />
          </div>
        );
      })}
    </div>
  );
};

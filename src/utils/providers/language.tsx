import { createContext, useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";



const initialState: LanguageProviderState = {
  language: "en",
  setLanguage: () => null,
};

const LanguageProviderContext =
  createContext<LanguageProviderState>(initialState);

export function LanguageProvider({
  children,
  defaultLanguage = "en",
  storageKey = "preferredLanguage",
  ...props
}: LanguageProviderProps) {
  const [language, setLanguage] = useState<string>(
    () => localStorage.getItem(storageKey) || defaultLanguage
  );

  const { i18n: translationI18n } = useTranslation();

  useEffect(() => {
    // translationI18n.changeLanguage(language);
    localStorage.setItem(storageKey, language);
  }, [language, translationI18n]);

  const value = {
    language,
    setLanguage: (lang: string) => {
      setLanguage(lang);
      translationI18n.changeLanguage(lang);
    },
  };

  return (
    <LanguageProviderContext.Provider {...props} value={value}>
      {children}
    </LanguageProviderContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageProviderContext);

  if (context === undefined)
    throw new Error("useLanguage must be used within a LanguageProvider");

  return context;
};

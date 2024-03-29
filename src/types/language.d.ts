type LanguageProviderProps = {
    children: React.ReactNode;
    defaultLanguage?: string;
    storageKey?: string;
  };

type LanguageProviderState = {
    language: string;
    setLanguage: (lang: string) => void;
  };
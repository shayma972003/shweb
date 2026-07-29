interface Language {
  name: string;
  level: string;
}

export function LanguageList({ languages }: { languages: Language[] }) {
  return (
    <div className="flex flex-col gap-3">
      {languages.map((language) => (
        <div key={language.name} className="flex items-center justify-between text-sm">
          <span className="font-medium text-foreground">{language.name}</span>
          <span className="text-muted-foreground">{language.level}</span>
        </div>
      ))}
    </div>
  );
}

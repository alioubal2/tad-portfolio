'use client';

const toolLogos = {
  'Adobe Photoshop': 'Ps',
  'Adobe Illustrator': 'Ai',
  'Canva': 'Cv',
  'Figma': 'Fi',
};

const toolColors = {
  'Adobe Photoshop': '#31a8ff',
  'Adobe Illustrator': '#ff9a00',
  'Canva': '#00c4cc',
  'Figma': '#a259ff',
};

export default function Tools({ tools, skills }) {
  const expertise = skills?.expertise || [];
  const soft = skills?.soft || [];
  const languages = skills?.languages || [];

  return (
    <section id="tools" className="py-28 px-6 reveal">
      <div className="max-w-6xl mx-auto">
        <span className="text-xs text-accent tracking-[0.3em] uppercase font-mono">
          04 &mdash; Compétences
        </span>
        <h2 className="font-display font-bold text-3xl md:text-4xl text-white mt-3 mb-16">
          Ce que je maîtrise
        </h2>

        {/* Domaines d'expertise */}
        {expertise.length > 0 && (
          <div className="mb-14">
            <h3 className="text-xs text-dark-400 tracking-widest uppercase mb-5">
              Domaines d&apos;expertise
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {expertise.map((item) => (
                <div
                  key={item.name}
                  className="p-6 bg-dark-800/40 border border-dark-700/50 rounded-xl hover:border-accent/20 transition-all duration-300"
                >
                  <h4 className="text-sm text-white font-medium mb-2">
                    {item.name}
                  </h4>
                  {item.description && (
                    <p className="text-sm text-dark-300 leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Logiciels */}
        <div className="mb-14">
          <h3 className="text-xs text-dark-400 tracking-widest uppercase mb-5">
            Logiciels
          </h3>
          <div className="grid sm:grid-cols-2 gap-5">
            {tools.map((tool) => {
              const abbr = toolLogos[tool.name] || tool.name.slice(0, 2);
              const color = toolColors[tool.name] || '#0ab71a';

              return (
                <div
                  key={tool.id}
                  className="flex items-start gap-5 p-5 bg-dark-800/40 border border-dark-700/50 rounded-xl hover:border-accent/20 transition-all duration-300"
                >
                  {/* Icon badge */}
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0"
                    style={{
                      background: `${color}12`,
                      border: `1px solid ${color}25`,
                      color: color,
                    }}
                  >
                    {abbr}
                  </div>

                  {/* Name + description */}
                  <div className="min-w-0">
                    <h4 className="text-sm text-white font-medium mb-1">
                      {tool.name}
                    </h4>
                    {tool.description && (
                      <p className="text-sm text-dark-300 leading-relaxed">
                        {tool.description}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Langues + Qualités */}
        <div className="grid md:grid-cols-2 gap-10">
          {languages.length > 0 && (
            <div>
              <h3 className="text-xs text-dark-400 tracking-widest uppercase mb-5">
                Langues
              </h3>
              <div className="space-y-3">
                {languages.map((lang) => (
                  <div
                    key={lang.name}
                    className="flex items-center justify-between p-4 bg-dark-800/40 border border-dark-700/50 rounded-xl"
                  >
                    <span className="text-sm text-white font-medium">
                      {lang.name}
                    </span>
                    <span className="text-xs text-dark-300">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {soft.length > 0 && (
            <div>
              <h3 className="text-xs text-dark-400 tracking-widest uppercase mb-5">
                Qualités
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {soft.map((item) => (
                  <span
                    key={item}
                    className="text-sm text-dark-200 px-4 py-2 bg-dark-800/40 border border-dark-700/50 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

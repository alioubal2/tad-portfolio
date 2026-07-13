'use client';

import { Instagram, Linkedin } from 'lucide-react';

// Behance n'existe pas dans lucide-react → petite icône SVG maison.
function Behance({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M8.2 6.6c.9 0 1.6.1 2.3.3.6.2 1.1.4 1.5.8.4.3.7.7.9 1.2.2.5.3 1 .3 1.7 0 .7-.2 1.3-.5 1.8-.3.5-.8.9-1.4 1.2.9.2 1.5.7 2 1.3.4.6.6 1.4.6 2.3 0 .7-.1 1.4-.4 1.9-.3.5-.7 1-1.1 1.3-.5.3-1 .6-1.7.7-.6.2-1.3.2-1.9.2H2V6.6h6.2Zm-.4 5.3c.5 0 1-.1 1.3-.4.3-.2.5-.7.5-1.2 0-.3 0-.6-.2-.8-.1-.2-.3-.3-.5-.4-.2-.1-.4-.2-.7-.2-.3 0-.5-.1-.8-.1H5v3.1h2.8Zm.2 5.6c.3 0 .6 0 .9-.1.3 0 .5-.1.7-.3.2-.1.4-.3.5-.5.1-.2.2-.5.2-.9 0-.7-.2-1.2-.6-1.5-.4-.3-.9-.4-1.6-.4H5v3.7h3Zm8.9-1.3c.4.4.9.5 1.6.5.5 0 1-.1 1.3-.4.4-.2.6-.5.7-.8h2.3c-.4 1.1-.9 1.9-1.7 2.4-.7.5-1.6.7-2.7.7-.7 0-1.4-.1-2-.4-.6-.2-1.1-.6-1.5-1-.4-.4-.7-1-.9-1.6-.2-.6-.3-1.3-.3-2 0-.7.1-1.3.4-1.9.2-.6.5-1.1 1-1.6.4-.4.9-.8 1.5-1 .6-.3 1.2-.4 1.9-.4.8 0 1.4.1 2 .4.6.3 1 .7 1.4 1.2.4.5.6 1.1.8 1.7.1.6.2 1.3.2 2h-6.3c0 .8.3 1.4.6 1.7Zm2.8-4.6c-.3-.3-.8-.5-1.4-.5-.4 0-.8.1-1 .2-.3.1-.5.3-.6.5-.2.2-.3.4-.3.6 0 .2-.1.4-.1.6h3.9c-.1-.7-.3-1.2-.5-1.4ZM15.9 7.5h4.9v1.2h-4.9V7.5Z" />
    </svg>
  );
}

const NETWORKS = [
  { key: 'instagram', label: 'Instagram', Icon: (p) => <Instagram size={p.size} /> },
  { key: 'behance', label: 'Behance', Icon: (p) => <Behance size={p.size} /> },
  { key: 'linkedin', label: 'LinkedIn', Icon: (p) => <Linkedin size={p.size} /> },
];

export default function Socials({ social = {}, size = 16, className = '' }) {
  const active = NETWORKS.filter((n) => social[n.key]);
  if (active.length === 0) return null;

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {active.map(({ key, label, Icon }) => (
        <a
          key={key}
          href={social[key]}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          title={label}
          className="w-9 h-9 rounded-lg bg-dark-800/60 border border-dark-700/60 flex items-center justify-center text-dark-300 hover:text-accent hover:border-accent/30 transition-all duration-200"
        >
          <Icon size={size} />
        </a>
      ))}
    </div>
  );
}

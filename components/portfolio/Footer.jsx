'use client';

import Socials from '@/components/portfolio/Socials';

export default function Footer({ profile }) {
  return (
    <footer className="border-t border-dark-700/50 mt-16">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-sm text-dark-400 text-center sm:text-left">
          &copy; {new Date().getFullYear()}{' '}
          <span className="text-dark-200">{profile.name}</span> &mdash; Tous
          droits réservés.
        </div>

        <div className="flex items-center gap-6">
          <Socials social={profile.social} />
          <a
            href="#"
            className="text-xs text-dark-400 hover:text-accent transition-colors font-mono tracking-wide"
          >
            Retour en haut
          </a>
        </div>
      </div>
    </footer>
  );
}

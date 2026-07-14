// lib/data.js
// Centralized data store using localStorage for persistence.
// The dashboard writes to it, the portfolio reads from it.

const STORAGE_KEY = 'portfolio_data';

const defaultData = {
  profile: {
    name: 'Abdourahmane Diallo',
    title: 'Directeur Artistique & Designer Graphique',
    bio: 'Designer graphique passionné, spécialisé dans la création d\'identités visuelles fortes et mémorables. Je transforme les visions de mes clients en expériences visuelles percutantes, alliant créativité, rigueur et sens du détail pour chaque projet.',
    email: 'taddiallo10@gmail.com',
    phone: '+224 625 441 945',
    location: 'Conakry, Guinée',
    availability: 'Disponible pour de nouveaux projets',
    photo: '/tad.jpg',
    social: {
      facebook: 'https://www.facebook.com/share/18uH3ZnBam/?mibextid=wwXIfr',
      whatsapp: 'https://wa.me/224625441945',
    },
    skills: {
      expertise: [
        {
          name: 'UI/UX Design',
          description: 'Conception d\'interfaces intuitives et d\'expériences utilisateur fluides.',
        },
        {
          name: 'Web Design',
          description: 'Création de sites web modernes, responsives et esthétiques.',
        },
        {
          name: 'Brand Identity',
          description: 'Identités visuelles fortes : logo, charte et déclinaisons.',
        },
        {
          name: 'Community Management',
          description: 'Gestion et animation de communautés sur les réseaux sociaux.',
        },
      ],
      soft: [
        'Rigoureux',
        'Adaptable',
        "Esprit d'équipe",
        'Créativité',
        'Écoute active',
      ],
      languages: [
        { name: 'Poular', level: 'Langue maternelle' },
        { name: 'Français', level: 'Courant' },
        { name: 'Anglais', level: 'Scolaire' },
      ],
    },
  },
  services: [
    {
      id: '1',
      title: 'Logo Design',
      description: 'Conception de logos uniques et distinctifs qui capturent l\'essence de votre marque. Chaque logo est pensé pour être mémorable, polyvalent et intemporel.',
      icon: 'Pen',
    },
    {
      id: '2',
      title: 'Identité Visuelle',
      description: 'Création de systèmes visuels complets : palette de couleurs, typographie, guidelines et déclinaisons pour assurer une cohérence sur tous vos supports.',
      icon: 'Palette',
    },
    {
      id: '3',
      title: 'Branding',
      description: 'Stratégie de marque globale, du positionnement à l\'exécution visuelle. Je construis des marques qui résonnent avec votre audience cible.',
      icon: 'Crown',
    },
    {
      id: '4',
      title: 'Design Print & Digital',
      description: 'Création de supports visuels pour le print (cartes de visite, flyers, affiches) et le digital (posts réseaux sociaux, bannières, présentations).',
      icon: 'Layout',
    },
  ],
  projects: [
    {
      id: '1',
      title: 'FinAsso',
      category: 'Branding & UI/UX',
      description: 'Application de gestion transparente des cotisations et fonds des associations communautaires en Guinée.',
      image: '/projects/finasso.jpg',
      imageFull: '/projects/finasso-full.jpg',
      year: '2026',
      featured: true,
    },
    {
      id: '2',
      title: 'Kaalissy',
      category: 'UI/UX Design',
      description: 'Une app pour gérer son argent facilement : dépenses, épargne, tontines et prêts, même sans connexion internet. Pour les particuliers et les entreprises.',
      image: '/projects/kaalissy.jpg',
      imageFull: '/projects/kaalissy-full.jpg',
      year: '2026',
      featured: true,
    },
    {
      id: '3',
      title: 'SmarTrack',
      category: 'Branding & UI/UX',
      description: 'Collier intelligent pour animaux combinant géolocalisation GPS, geofencing et suivi sanitaire. Identité visuelle et design de l\'application.',
      image: '/projects/smartrack.jpg',
      imageFull: '/projects/smartrack-full.jpg',
      year: '2025',
      featured: true,
    },
  ],
  tools: [
    {
      id: '1',
      name: 'Figma',
      description: 'Design d\'interfaces, prototypage et maquettes UI/UX.',
    },
    {
      id: '2',
      name: 'Adobe Illustrator',
      description: 'Création de logos et illustrations vectorielles.',
    },
    {
      id: '3',
      name: 'Adobe Photoshop',
      description: 'Retouche photo et composition de visuels.',
    },
    {
      id: '4',
      name: 'Canva',
      description: 'Visuels rapides pour les réseaux sociaux.',
    },
  ],
};

export function getData() {
  if (typeof window === 'undefined') return defaultData;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      // Merge with defaults to ensure new fields are always present
      return {
        profile: { ...defaultData.profile, ...parsed.profile },
        services: parsed.services?.length ? parsed.services : defaultData.services,
        projects: parsed.projects?.length ? parsed.projects : defaultData.projects,
        tools: parsed.tools?.length ? parsed.tools : defaultData.tools,
      };
    }
  } catch (e) {
    console.error('Failed to read portfolio data:', e);
  }
  return defaultData;
}

export function saveData(data) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.error('Failed to save portfolio data:', e);
  }
}

export function getDefaults() {
  return defaultData;
}

export function resetData() {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(STORAGE_KEY);
}

// Generate unique IDs
export function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

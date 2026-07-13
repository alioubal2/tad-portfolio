import { ImageResponse } from 'next/og';

// Image de partage 1200×630 générée à la volée (aperçu sur WhatsApp, LinkedIn, etc.)
export const runtime = 'edge';
export const alt = 'Abdourahmane Diallo — Directeur Artistique & Designer Graphique';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#0b0c0e',
          padding: '72px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Top row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', fontSize: 40, fontWeight: 800, color: '#ffffff', letterSpacing: '-1px' }}>
            AD<span style={{ color: '#0ab71a' }}>.</span>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              padding: '10px 22px',
              border: '1px solid #2a2d33',
              borderRadius: 999,
              color: '#c8c9cc',
              fontSize: 22,
            }}
          >
            <div style={{ width: 10, height: 10, borderRadius: 999, background: '#0ab71a' }} />
            Disponible pour vos projets
          </div>
        </div>

        {/* Center */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 82, fontWeight: 800, color: '#ffffff', lineHeight: 1.05, letterSpacing: '-2px' }}>
            Abdourahmane Diallo
          </div>
          <div style={{ fontSize: 38, color: '#9a9ba0', marginTop: 18 }}>
            Directeur Artistique &amp; Designer Graphique
          </div>
        </div>

        {/* Bottom */}
        <div
          style={{
            display: 'flex',
            fontSize: 26,
            color: '#0ab71a',
            letterSpacing: '4px',
            textTransform: 'uppercase',
            fontWeight: 500,
          }}
        >
          Logo · Branding · Identité Visuelle
        </div>
      </div>
    ),
    { ...size }
  );
}

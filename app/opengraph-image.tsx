import { ImageResponse } from 'next/og';

export const alt = 'Portugal Prático — informação pública, explicada';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#052e2b',
          color: 'white',
          padding: '72px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', fontSize: 34, fontWeight: 800 }}>
          Portugal{' '}
          <span style={{ color: '#fcd34d', marginLeft: 10 }}>Prático</span>
        </div>
        <div
          style={{
            display: 'flex',
            maxWidth: 980,
            fontSize: 68,
            fontWeight: 800,
            lineHeight: 1.08,
          }}
        >
          Informação pública, explicada.
        </div>
        <div style={{ display: 'flex', color: '#a7f3d0', fontSize: 27 }}>
          Guias claros, verificados e ligados às fontes oficiais.
        </div>
      </div>
    ),
    size
  );
}

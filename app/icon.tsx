import { ImageResponse } from 'next/server'
 
// Route segment config
export const runtime = 'edge'
 
// Image metadata
export const size = {
  width: 32,
  height: 32,
}
 
// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // Star of David Icon
      <div
        style={{
          fontSize: 24,
          background: '#213547',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#F5E6D3',
        }}
      >
        ✡️
      </div>
    ),
    {
      ...size,
    }
  )
}


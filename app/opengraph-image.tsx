import { ImageResponse } from 'next/server'

export const runtime = 'edge'

export const alt = 'Rabbi Moshe - AI Rabbi for the Digital Age'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'linear-gradient(to bottom, #F5E6D3, #E6D0B3)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg width="200" height="200" viewBox="0 0 466 466" fill="#8B4513" xmlns="http://www.w3.org/2000/svg">
          {/* Star of David path */}
          <path d="M372.158,233.012l63.008-109.114c1.43-2.475,1.43-5.525,0-8c-1.429-2.476-4.07-4-6.928-4H302.204L239.883,3.999
          C238.455,1.524,235.814,0,232.957,0c0,0,0,0-0.001,0c-2.857,0-5.497,1.524-6.927,3.998l-62.35,107.9H37.762
          c-2.858,0-5.5,1.525-6.928,4c-1.429,2.475-1.429,5.525,0,8l62.999,109.098L30.834,342.102c-1.429,2.476-1.429,5.525,0,8
          c1.429,2.475,4.07,4,6.928,4h126.005L226.072,462c1.429,2.475,4.07,4,6.928,4s5.499-1.524,6.928-4l62.306-107.898h126.005
          c2.858,0,5.5-1.525,6.929-4c1.429-2.476,1.428-5.525-0.001-8L372.158,233.012z" />
        </svg>
        <div style={{ fontSize: 60, fontWeight: 'bold', color: '#8B4513', marginTop: 40 }}>Rabbi Moshe</div>
        <div style={{ fontSize: 30, color: '#8B4513', marginTop: 20 }}>AI Rabbi for the Digital Age</div>
      </div>
    ),
    { ...size }
  )
}


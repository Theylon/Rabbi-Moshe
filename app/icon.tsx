import { ImageResponse } from "next/server"

export const runtime = "edge"

export const size = {
  width: 32,
  height: 32,
}

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 24,
        background: "#213547",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#F5E6D3",
      }}
    >
      ✡️
    </div>,
    { ...size },
  )
}


import './Dot.scss'

const DEFAULT_SCALE = 0.4

type DotProps = {
  index: number
  top: number
  left: number
  scale?: number
}

export const Dot = ({ index, top, left, scale = DEFAULT_SCALE }: DotProps) => (
  <div className="dot" style={{ top, left, transform: `scale(${scale})` }}>
    {index}
  </div>
)

import classnames from 'classnames'
import './Dot.scss'

type DotProps = {
  index: number
  top: number
  left: number
  scale?: number
}

export const Dot = ({ index, top, left, scale }: DotProps) => (
  <div
    className={classnames('dot', {
      hide: scale === 0,
    })}
    style={{
      top,
      left,
      transitionDelay: `0ms, ${50 * index}ms, ${100 * index}ms, ${
        100 * index
      }ms`,
    }}
  >
    {index + 1}
  </div>
)

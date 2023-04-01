import classnames from 'classnames'
import './Dot.scss'

type DotProps = {
  index: number
  top: number | string
  left: number | string
  isFocused: boolean
  onMouseOver: (id: number) => void
  onMouseOut: () => void
  scale?: number
}

export const Dot = ({
  index,
  top,
  left,
  scale,
  isFocused,
  onMouseOver,
  onMouseOut,
}: DotProps) => (
  <div
    onMouseOver={() => onMouseOver(index)}
    onMouseOut={onMouseOut}
    className={classnames('dot', {
      hide: scale === 0,
      focused: isFocused,
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

import classnames from 'classnames'
import './Legend.scss'

type LegendProps = {
  textGroup: string[]
  onMouseOver: (index: number) => void
  onMouseOut: () => void
  activeIndex?: number
}

export const Legend = ({
  textGroup,
  activeIndex,
  onMouseOver,
  onMouseOut,
}: LegendProps) => (
  <div className="legend">
    {textGroup.map((text, index) => (
      <p
        key={index}
        className={classnames('legend__text', {
          focused: index === activeIndex,
        })}
        onMouseOver={() => onMouseOver(index)}
        onMouseOut={onMouseOut}
      >
        <span className="legend__dot">{index + 1}</span>
        {text}
      </p>
    ))}
  </div>
)

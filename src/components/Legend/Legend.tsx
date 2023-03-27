import classnames from 'classnames'
import './Legend.scss'

type LegendProps = {
  textGroup: string[]
  activeIndex?: number
}

export const Legend = ({ textGroup, activeIndex }: LegendProps) => (
  <div className="legend">
    {textGroup.map((text, index) => (
      <p
        key={index}
        className={classnames('legend__text', {
          focused: index === activeIndex,
        })}
      >
        <span className="legend__dot">{index + 1}</span>
        {text}
      </p>
    ))}
  </div>
)

import { useCallback, useState } from 'react'
import classnames from 'classnames'
import Toggle from '../Toggle'
import Dot from '../Dot'
import Legend from '../Legend'
import { DotType } from '../../types'
import { normalizeGroup } from '../../helpers/utils'
import './Widget.scss'

type Dots = {
  old: DotType[]
  new: DotType[]
}

type WidgetProps = {
  images: {
    old: string
    new: string
  }
  dots: Dots | DotType[]
  legend?: string[]
}

export const Widget = ({ images, dots, legend }: WidgetProps) => {
  const [isOn, onClick] = useState(false)
  const [activeDot, setActiveDot] = useState<number>()

  const getGroup = useCallback(() => {
    if (Array.isArray(dots)) {
      return normalizeGroup(dots)
    }
    if (isOn) {
      return normalizeGroup(dots.new, dots.old)
    }

    return normalizeGroup(dots.old, dots.new)
  }, [isOn])

  const onMouseOut = () => {
    setActiveDot(undefined)
  }

  return (
    <section className="widget" data-testid="widget-component">
      <div className={classnames('widget__container', { after: isOn })}>
        <div className="widget__content">
          <img src={images.old} className="widget__img old" />
          <img src={images.new} className="widget__img new" />
          {getGroup().map(({ top, left, scale }, index) => (
            <Dot
              index={index}
              key={index}
              top={top}
              left={left}
              scale={scale}
              isFocused={index === activeDot}
              onMouseOver={setActiveDot}
              onMouseOut={onMouseOut}
            />
          ))}
        </div>
        <Toggle onClick={onClick} />
        <div className="widget__legend">
          {legend?.length ? (
            <Legend
              textGroup={legend}
              activeIndex={activeDot}
              onMouseOver={setActiveDot}
              onMouseOut={onMouseOut}
            />
          ) : null}
        </div>
      </div>
    </section>
  )
}

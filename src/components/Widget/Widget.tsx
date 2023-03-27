import { useCallback, useState } from 'react'
import classnames from 'classnames'
import Toggle from '../Toggle'
import Dot from '../Dot'
import Legend from '../Legend'
import { normalizeGroup } from '../../helpers/utils'
import './Widget.scss'

type Dots = {
  old: { x: number; y: number }[]
  new: { x: number; y: number }[]
}

type WidgetProps = {
  images: {
    old: string
    new: string
  }
  dots: Dots
  legend?: string[]
}

export const Widget = ({ images, dots, legend }: WidgetProps) => {
  const [isOn, onClick] = useState(false)
  const [activeDot, setActiveDot] = useState<number>()

  const getGroup = useCallback(() => {
    if (isOn) {
      return normalizeGroup(dots.new, dots.old)
    }

    return normalizeGroup(dots.old, dots.new)
  }, [isOn])

  const onDotOver = (index: number) => {
    setActiveDot(index)
  }

  const onDotOut = () => {
    setActiveDot(undefined)
  }

  return (
    <section className="widget">
      <div className={classnames('widget__container', { after: isOn })}>
        <img src={images.old} className="widget__img old" />
        <img src={images.new} className="widget__img new" />
        {getGroup().map(({ top, left, scale }, index) => (
          <Dot
            index={index}
            key={index}
            top={top}
            left={left}
            scale={scale}
            onMouseOver={onDotOver}
            onMouseOut={onDotOut}
          />
        ))}
      </div>
      <Toggle onClick={onClick} />
      <div className="widget__legend">
        {legend?.length ? (
          <Legend textGroup={legend} activeIndex={activeDot} />
        ) : null}
      </div>
    </section>
  )
}

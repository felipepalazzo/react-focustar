import { useCallback, useState } from 'react'
import classnames from 'classnames'
import Toggle from '../Toggle'
import Dot from '../Dot'
import './Widget.scss'
import { normalizeGroups } from '../../utils'

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
}

export const Widget = ({ images, dots }: WidgetProps) => {
  const [isOn, onClick] = useState(false)

  const getGroup = useCallback(() => {
    if (isOn) {
      return normalizeGroups(dots.new, dots.old)
    }

    return normalizeGroups(dots.old, dots.new)
  }, [isOn])

  return (
    <section className="widget">
      <div className={classnames('widget__container', { after: isOn })}>
        <img src={images.old} className="widget__img old" />
        <img src={images.new} className="widget__img new" />
      </div>
      {getGroup().map((item, index) => (
        <Dot
          index={index + 1}
          key={index}
          top={item.top}
          left={item.left}
          scale={item.scale}
        />
      ))}
      <Toggle onClick={onClick} />
    </section>
  )
}

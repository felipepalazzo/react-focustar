import { useState } from 'react'
import classnames from 'classnames'
import { Toggle } from '../Toggle'
import './Widget.scss'

type WidgetProps = {
  images: {
    old: string
    new: string
  }
}

const Widget = ({ images }: WidgetProps) => {
  const [isOn, onClick] = useState(false)

  return (
    <section className="widget">
      <div className={classnames('widget__container', { after: isOn })}>
        <img src={images.old} className="widget__img old" />
        <img src={images.new} className="widget__img new" />
        {/* <div className="dot">1</div>
        <div className="dot">2</div>
        <div className="dot">3</div> */}
      </div>
      <Toggle onClick={onClick} />
    </section>
  )
}

export default Widget

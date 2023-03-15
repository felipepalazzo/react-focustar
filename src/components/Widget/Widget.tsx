import { Toggle } from '../Toggle'
import './Widget.scss'

type WidgetProps = {
  images: {
    old: string
    new: string
  }
}

const Widget = ({ images }: WidgetProps) => {
  return (
    <section>
      <div className="container">
        <img src={images.old} className="container-img after" />
        <img src={images.new} className="container-img before" />
        <div className="dot">1</div>
        <div className="dot">2</div>
        <div className="dot">3</div>
      </div>
      <Toggle onClick={checked => console.log('checked?', checked)} />
    </section>
  )
}

export default Widget

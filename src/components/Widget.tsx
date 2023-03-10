import Toggle from './Toggle'

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
        <img src={images.old} className="after" />
        <img src={images.new} className="before" />
        <div className="dot">1</div>
        <div className="dot">2</div>
        <div className="dot">3</div>
      </div>
      <Toggle />
    </section>
  )
}

export default Widget

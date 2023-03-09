import Toggle from './Toggle'

type WidgetProps = {
  imgOld: string
  imgNew: string
}

const Widget = ({ imgOld, imgNew }: WidgetProps) => (
  <section>
    <div className="container">
      <img src={imgOld} className="after" />
      <img src={imgNew} className="before" />
      <div className="dot">1</div>
      <div className="dot">2</div>
      <div className="dot">3</div>
    </div>
    <Toggle />
  </section>
)

export default Widget

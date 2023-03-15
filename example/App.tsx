import Widget from '../src/components/Widget/Widget'
import Img1 from './img/integrate-web-builder.png'
import Img2 from './img/integrate-web-event.png'
import './styles/main.scss'

export default function App() {
  return (
    <div className="container">
      <Widget
        images={{
          old: Img1,
          new: Img2,
        }}
      />
    </div>
  )
}

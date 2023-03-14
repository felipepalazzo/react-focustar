import Widget from '../src/components/Widget/Widget'
import Img1 from './img/integrate-web-builder.png'
import Img2 from './img/integrate-web-event.png'

export default function App() {
  return (
    <Widget
      images={{
        old: Img1,
        new: Img2,
      }}
    />
  )
}

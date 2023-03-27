import Widget from '../src'
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
        dots={{
          old: [
            { x: 10, y: 10 },
            { x: 100, y: 90 },
            { x: 400, y: 390 },
          ],
          new: [
            { x: 150, y: 50 },
            { x: 200, y: 80 },
          ],
        }}
        legend={[
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
          'Integer ut sem nec sem fringilla suscipit eget viverra nunc.',
        ]}
      />
    </div>
  )
}

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
            { x: '25%', y: '25%' },
            { x: '50%', y: '50%' },
            { x: '75%', y: '75%' },
          ],
          new: [
            { x: '20%', y: '40%' },
            { x: '30%', y: '80%' },
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

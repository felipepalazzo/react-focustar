import { render, screen, fireEvent } from '@testing-library/react'

import { Widget } from '../Widget'
import Img1 from './img/integrate-web-builder.png'
import Img2 from './img/integrate-web-event.png'

describe('Widget', () => {
  test('toggle', () => {
    render(
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
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          'Class aptent taciti sociosqu ad litora torquent per conubia nostra',
          'Integer ut sem nec sem fringilla suscipit eget viverra nunc',
        ]}
      />
    )

    expect(screen.getByTestId('widget-component')).toBeInTheDocument()
    expect(
      screen.getByText(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
      )
    ).toBeVisible()
    expect(
      screen.getByText(
        'Integer ut sem nec sem fringilla suscipit eget viverra nunc'
      )
    ).toBeVisible()
    expect(
      screen.getByText(
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra'
      )
    ).toBeVisible()

    expect(screen.getByTestId('input-checkbox')).not.toBeChecked()
    fireEvent.click(screen.getByText('After'))
    expect(screen.getByTestId('input-checkbox')).toBeChecked()
  })
})

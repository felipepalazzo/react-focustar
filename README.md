# React FocuStar

[![build](https://github.com/felipepalazzo/react-focustar/actions/workflows/ci.yml/badge.svg)](https://github.com/felipepalazzo/react-focustar/actions/workflows/ci.yml)

Simple React component to drop points into pictures

## Installation

```bash
npm install react-focustar
# yarn add react-focustar
```

## Usage

```jsx static
import { Widget } from 'react-focustar'

function MyApp() {
  return (
    <div className="container">
      <Widget
        images={{
          old: '',
          new: '',
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
          'Class aptent taciti sociosqu ad litora torquent',
          'Integer ut sem nec sem fringilla suscipit eget viverra nunc',
        ]}
      />
    </div>
  )
}
```

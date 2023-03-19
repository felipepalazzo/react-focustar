import { normalizeGroup } from '../utils'

describe('#normalizeGroup', () => {
  test('same length', () => {
    const oldDots = [{ x: 10, y: 20 }]
    const newDots = [{ x: 30, y: 40 }]
    const result = normalizeGroup(oldDots, newDots)
    expect(result).toStrictEqual([{ left: 10, top: 20 }])
  })

  test('old has more dots than new', () => {
    const oldDots = [
      { x: 10, y: 20 },
      { x: 200, y: 200 },
    ]
    const newDots = [{ x: 30, y: 40 }]
    const result = normalizeGroup(oldDots, newDots)
    expect(result).toStrictEqual([
      { left: 10, top: 20 },
      { left: 200, top: 200 },
    ])
  })

  test('new has more dots than old', () => {
    const oldDots = [{ x: 10, y: 20 }]
    const newDots = [
      { x: 30, y: 40 },
      { x: 150, y: 90 },
    ]
    const result = normalizeGroup(oldDots, newDots)
    expect(result).toStrictEqual([
      { left: 10, top: 20 },
      { left: 150, top: 90, scale: 0 },
    ])
  })
})

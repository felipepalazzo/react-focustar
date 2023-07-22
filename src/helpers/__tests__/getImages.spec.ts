import { getImages } from '../utils'

describe('#getImages', () => {
  test('one image', () => {
    const result = getImages(['https://placedog.net/500'])
    expect(result).toStrictEqual([
      { src: 'https://placedog.net/500', className: 'old' },
    ])
  })
  test('two image', () => {
    const result = getImages([
      'https://placedog.net/500',
      'https://placedog.net/400',
    ])
    expect(result).toStrictEqual([
      { src: 'https://placedog.net/500', className: 'old' },
      { src: 'https://placedog.net/400', className: 'new' },
    ])
  })
})

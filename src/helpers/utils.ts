import { DotType } from '../types'

export const normalizeGroup = (
  arrayBase: DotType[],
  arrayCompare?: DotType[]
): { top: number | string; left: number | string; scale?: number }[] => {
  if (arrayCompare && arrayBase.length < arrayCompare.length) {
    const slice = arrayCompare
      .slice((arrayCompare.length - arrayBase.length) * -1)
      .map(item => ({ ...item, scale: 0 }))

    return [...arrayBase, ...slice].map(({ x, y, ...rest }) => ({
      top: y,
      left: x,
      ...rest,
    }))
  }

  return arrayBase.map(({ x, y }) => ({
    top: y,
    left: x,
  }))
}

export const getImages = (
  images: string[],
  maxNum = 2
): Array<Record<string, string>> => {
  const imgs = images.slice(0, maxNum)
  const newImgs = [{ src: imgs[0], className: 'old' }]
  if (imgs.length > 1) {
    newImgs.push({ src: imgs[1], className: 'new' })
  }

  return newImgs
}

export const normalizeGroup = (
  arrayBase: { x: number; y: number }[],
  arrayCompare: { x: number; y: number }[]
): { top: number; left: number; scale?: number }[] => {
  if (arrayBase.length < arrayCompare.length) {
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

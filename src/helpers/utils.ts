export const normalizeGroup = (
  arrayBase: DotType[],
  arrayCompare: DotType[]
): { top: number | string; left: number | string; scale?: number }[] => {
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

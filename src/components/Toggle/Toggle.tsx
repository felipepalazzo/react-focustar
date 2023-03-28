import { useCallback, useEffect, useState } from 'react'
import classnames from 'classnames'
import './Toggle.scss'

type ToggleProps = {
  onClick?: (checked: boolean) => void
}

export const Toggle = ({ onClick }: ToggleProps) => {
  const [toggled, setToggled] = useState(false)

  useEffect(() => {
    if (onClick) {
      onClick(toggled)
    }
  }, [toggled])

  const handleClick = useCallback(() => {
    setToggled(!toggled)
  }, [toggled])

  return (
    <label className={classnames('toggle', { toggled })}>
      <input
        data-testid="input-checkbox"
        onChange={handleClick}
        type="checkbox"
        className="toggle__input"
        checked={toggled}
      />
      <span className="toggle__selection" />
      <span className="toggle__button before">Before</span>
      <span className="toggle__button after">After</span>
    </label>
  )
}

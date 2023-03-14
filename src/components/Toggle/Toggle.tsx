import { useCallback, useState } from 'react'
import classnames from 'classnames'
import './Toggle.scss'

const Toggle = () => {
  const [toggled, setToggled] = useState(false)

  const onClick = useCallback(() => {
    setToggled(!toggled)
  }, [toggled])

  return (
    <div className={classnames('toggle', { toggled })} onClick={onClick}>
      <div className="selection"></div>
      <div className="button before">Before</div>
      <div className="button after">After</div>
    </div>
  )
}

export default Toggle

import React, { useState } from "react"


// компонент
const Button = (props) => {

  // состояния компонента
  // 1. Появление (mount)
  // 2. Изменения (onChange) - при изменении props (ВЕСЬ КОМПОНЕНТ!), изменение состояния (state)
  // 3. Убирание (unmount)
  const [count, setCount] = useState(1); 

  const handleClick = (e) => {
    console.log(count)
    setCount((prevCount) => prevCount + 1)
    setCount((prevCount) => prevCount + 1)
  }

  return (
    <button onClick={(e) => handleClick(e)}>
      {props.title || 'Нет текста'} ({count})
    </button>
  )

}

export {
  Button,
}
 
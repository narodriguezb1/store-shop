import React, { useRef, useState } from 'react'

const useBoolean = ({initialState}) => {
    const [value, setValue] = useState(initialState)

    const updateBooleanValue = useRef(
        {
            toggle: () => setValue(!value),
            on: () => setValue(true),
            off: () => setValue(false)
        }
    )
  return [
      value,
      updateBooleanValue.current
  ]
}

export default useBoolean
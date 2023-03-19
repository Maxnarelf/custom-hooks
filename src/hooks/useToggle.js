import { useState } from 'react'

export default function useToggle() {
    const [value, setValue] = useState(true)
    const toggle = () => {
        setValue(!value)
    }
  return [value, toggle]
}

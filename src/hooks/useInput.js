import  { useState } from 'react'

export const useInput = (initialValue) => {
    const [val, setVal] = useState(initialValue)

    const reset = () => {
        setVal(initialValue)
    }

    const bind ={
        value: val,
        onChange: (e) => setVal(e.target.value)
    }
  return {val, reset, bind }
}

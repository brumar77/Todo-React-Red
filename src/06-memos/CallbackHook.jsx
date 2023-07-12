import { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement'

export const CallbackHook = () => {
    const [counter, setcounter] = useState(10)

    const incrementFather = useCallback(
        (parametro) => {
        setcounter( ( value ) => value + parametro);
        },
        [],
    )
    
    return (
    <>
        <h1>useCallback Hooke: { counter }</h1>
        <hr />

        <ShowIncrement increment={ incrementFather }/>
        
    </>
  )
}

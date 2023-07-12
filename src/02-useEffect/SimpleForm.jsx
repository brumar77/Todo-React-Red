import { useEffect } from "react"
import { useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'Martiu',
        email: 'email@estado.com'
    });

    const {username, email} = formState;

    const onInputChange = ({target}) => {
        const { name, value } = target
        
        setFormState({
            ...formState,
            [ name ]: value
        })
    };

    useEffect(() => {
        
    }), [];
    


  return (
    <>
        <h1>SimpleForm</h1>
        <hr />

        <input 
            type="text" 
            className="form-control"
            placeholder="Username"
            name="username"    
            value={username}
            onChange={ onInputChange }
        />

        <input 
            type="email"
            className="form-control mt-2"
            placeholder="martin@ejemplo.com"
            name="email"
            value={email}
            onChange={ onInputChange }
        
        />

        {
            (username === 'Martiu2')  && <Message/>

        }
        
    </>
  )
}

import { useCounter, useFetch } from "../hooks"
import { LoadingQuote, Quote } from "./"



export const MultipleCustomHooks = () => {
  
  const { counter, increment, decrement } = useCounter()
  
  const {data, isLoading, hasError} = useFetch(`https://rickandmortyapi.com/api/character/${counter}`)
 
  return (
    <>  
        <h1>Rick and Morty Quotes</h1>
        <hr />

        {
          isLoading 
            ? <LoadingQuote/>
            : <Quote data={data}/>
        }
        <button 
          className="btn btn-primary"
          disabled={isLoading} 
          onClick={()=>{increment()} }>
          Next Charater
        </button>

       
     
    </>
  )
}

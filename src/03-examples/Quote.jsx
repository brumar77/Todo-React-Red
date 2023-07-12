
export const Quote = ({data}) => {
  return (
    <blockquote className="blockquote text-end">
      <p className="mb-1">{ data.species }</p>
      <footer className="blockquote-footer">{data.name}</footer>
    </blockquote>   
  )
}

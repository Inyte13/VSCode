import { useRouter } from "../hooks/useRouter"

export function Link ({ href, children, ...props }){
  const { navegarA } = useRouter()
  const manejarClick = ((e) => {
    e.preventDefault()
    navegarA(href)
  })
  
  return(
    <a 
      href={href}
      {...props}
      onClick={manejarClick}>
      {children}
    </a>
  )
}
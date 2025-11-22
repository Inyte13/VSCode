export function Link({href,children,...props}){
  const manejarClick=((e)=>{
    e.preventDefault()
    history.pushState({}, "", href)
    dispatchEvent(new PopStateEvent("popstate"))

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
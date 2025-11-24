export function Celda({children, index, value, updateEstado}){
  const manejarClick = () => {
    updateEstado(index)
  }
  return (
    <div 
      className="celda"
      onClick={manejarClick}>
      <span>{children}</span>
    </div>
  )
}
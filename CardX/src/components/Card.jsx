import { useState } from "react"
import styles from "./Card.module.css"
export function Card({userName,name,initialEsSeguidor=false}){ // Las props deben ser INMUTABLES
  const [esSeguidor,setEsSeguidor]=useState(initialEsSeguidor)
  const manejarClick=()=>{
    setEsSeguidor(!esSeguidor)
  }
  return (
    <article className={styles.card}>
      <header>
        <img 
          src="https://i.scdn.co/image/ab6761610000e5ebba025c8f62612b2ca6bfa375" 
          alt={`El avatar de ${name}`}/>
        <div>
          <strong>{name}</strong>
          <span>@{userName}</span>
        </div>
      </header>
      <aside>
        <button className={esSeguidor?styles.btnSiguiendo:styles.btnSeguir} onClick={manejarClick}>
          <span className={styles.follow}>{esSeguidor?"Siguiendo":"Seguir"}</span>
          <span className={styles.unfollow}>Dejar de seguir</span>
        </button>
      </aside>
    </article>
  )
} 
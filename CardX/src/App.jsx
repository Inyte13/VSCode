import { Card } from "./components/Card"
export default function App() {
  return (
    <main>
      <Card 
        name={"Hatsune Miku"}
        userName={"miku"}
        initialEsSeguidor // true implícito
      />
      <Card 
        name={"Pablo Iglesias"}
        userName={"pbCatedral"}
        // initialEsSeguidor={false}, default por Card.jsx
      />
      <Card 
        name={"Almorrón Estebán"}
        userName={"estebi"}
        initialEsSeguidor={false}  
      />
    </main>
  )
}

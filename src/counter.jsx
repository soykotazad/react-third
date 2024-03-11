import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0)
    const handleAdd =() =>{
        const newcount = count +1;
        setCount(newcount)

    }
    const handleNo =() =>{
        const newcount = count -1;
        setCount(newcount)

    }
    return (
        <div>
        <h3>counter : {count}  </h3>
        <button onClick={handleAdd}> Add </button>
        <button onClick={handleNo}>Minus</button>
        </div>
    
          
    )
}
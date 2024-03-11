import { useState } from "react"

export default function Team(){
    const [team ,setTeam] = useState(7)


    const handlebtn =() =>{
        const newcount = team + 1;
        setTeam(newcount)

    }

    return(

        <div>

          <h3>
            players :  {team}
          </h3>
          <button onClick={handlebtn}>Add Member</button>
        
    </div>




    )
    }
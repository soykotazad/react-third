import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Actor from './actor'
import Counter from './counter'
import Team from './team'
import Users from './users'
import Friends from './friends'





function App() {

  // const books = [
  //   {id:1 , name:'phy',  price : 99 },
  //   {id:2 , name:'chm',  price : 99 },
  //   {id:3 , name:'math',  price : 99 }
  // ]
   
  // const actors =['sakib ' ,'rakib' , 'jasim']
   

  function handleClick(){
    alert('button clicked');
  }
  const handleClick2 = (num) =>{
    alert(num + 405);
  }

  return (
    <>

  
      
      <h1> React Explore 2</h1>
      
      <Friends></Friends>

      <Users></Users>

      <Team> </Team>
      
      <Counter> </Counter>
      
      <button onClick={handleClick}>Hit me</button>
      <button onClick={() =>handleClick2(2)}>Add me</button>
      

        
        {/* <bookStore books={books} ></bookStore>


      <Actor name={'bappi da'} ></Actor>
        {
          actors.map(actor=> <Actor name = {actor} > </Actor>)
        } */}
    
    </>
  )
}

export default App

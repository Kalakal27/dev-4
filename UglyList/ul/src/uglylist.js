import React, { useContext } from "react";



export default function Uglylist(){
    const [newUglyimg, setNewUglyimg] = React.useState({
        Title:"",
        Description:"", 
    })




      const context = useContext(ThemeContext)
  return(
    <>
    <div className="container">
        <h2 className="top">

          
          
            
        </h2>
        <h2 className="bottom">

        </h2>
    </div>

    <div>
      <input type="text" className={`${input.Title}input1`} name="title" value={context.newUglyimg.Title} >Title</input>
      <input type="text" className={`${input.Description}input2`} name="description" value={context.newUglyimg.Description}>Description</input>
      <button onClick>Submit</button>

    </div>
    
    
    </>
  )  

}
import React, { useEffect, useRef, useState } from 'react'
import "./App.css"

const App = () => {
  const inputRef = useRef([])
  const [isSubmited,setIsSubmited] = useState(false)
  const [inputText,SetinputText] = useState(
    new Array(4).fill("")
  ) 


 const handleInput = (e,i)=>{
  
   if(isNaN(e.target.value)) return
let newInputText = [...inputText]
newInputText[i] = e.target.value
  let lastDig =  newInputText[i].slice(newInputText[i].length-1) 
  newInputText[i] = lastDig
  if(inputText[i+1] < 4){
    inputRef.current[i+1].focus()
  }
  SetinputText(newInputText)

const filterMethod = newInputText.filter((e)=>e !== "")

if( filterMethod.length === 4){
setIsSubmited(true)
}


 }

 const handleRef = (e,i)=>{
  inputRef.current[i] = e

 }

 useEffect(()=>{
if(inputRef.current) 
    inputRef.current[0].focus()

 },[])



 
 // for key down function for backspace

 const handleKeydown = (e, i) => {
  if (e.key === "Backspace" &&  inputRef.current[i-1]  ) {
    console.log(i)

//     let newInput = [...inputText]
//     newInput[i] = ""
//     SetinputText(newInput)


setTimeout(() => {
  
  inputRef.current[i-1].focus()
}, 0);



    

    
  }



  }
  return (
    <>
    <h2 >Otp Generator app</h2>

 {!isSubmited && <div className='inputdiv'>
      {inputText?.map((feild ,i)=> <input ref={(e)=>handleRef(e,i)} onKeyDown={(e)=>handleKeydown(e,i)} onChange={(e)=> handleInput(e,i)} value={feild} type='text'/>)}

    </div> }   

{isSubmited &&    <div>
      <h2>YOu have loged in succesfully</h2>
    </div>}
  
    </>
  )
}

export default App
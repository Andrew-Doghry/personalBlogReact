import { useEffect, useState } from "react"

function Button() {
    const [buttonOn , setButton] = useState(false)
    function buttonClicked(e){
        setButton(()=>!buttonOn)
        e.target.classList.toggle("before:right-0")
        e.target.classList.toggle("before:bg-blue-200")
        e.target.classList.toggle("before:bg-blue-900")
        e.target.classList.toggle("bg-blue-50")
        e.target.classList.toggle("bg-blue-500")
    }
    useEffect(()=>{
        console.log(buttonOn)
    },[buttonOn])    
  return (
    <div className="h-screen w-screen flex justify-center items-center">
        <div className={`h-8 w-16 rounded-2xl bg-blue-50 text-start border before:border flex items-center relative  before:absolute before:h-10 before:w-10 before:rounded-full before:bg-blue-200  before:transition`} onClick={buttonClicked}></div>
    </div>
  )
}

export default Button
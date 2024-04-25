import React, { createContext, useState } from 'react'
export const addproResponsecontext=createContext()
function ContextShare({children}) {
    const [addprojectresponse,setAddprojectresponse]=useState("")
  return (
     <>
     <addproResponsecontext.Provider value={{addprojectresponse,setAddprojectresponse}}>
         {children}
     </addproResponsecontext.Provider>
       
    </>
  )
}

export default ContextShare
import { useState } from "react"

function BgChange({setColorPassToChaild}){
    return(
        <>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap gap-2 p-2 bg-white rounded-3xl">
            <button onClick={() => setColorPassToChaild("#fa430b")} className="outline-none px-4 py-1 rounded-full text-white text-sm" style={{backgroundColor: "#fa430b"}}>Red</button>
            <button onClick={() => setColorPassToChaild("rgb(38, 71, 43)")} className="outline-none px-4 py-1 rounded-full text-white text-sm" style={{backgroundColor: "rgb(38, 71, 43)"}}>Green</button>
            <button onClick={() => setColorPassToChaild("#3e0f9e")} className="outline-none px-4 py-1 rounded-full text-white text-sm" style={{backgroundColor: "#3e0f9e"}}>Blue</button>
            <button onClick={() => setColorPassToChaild("indigo")} className="outline-none px-4 py-1 rounded-full text-white text-sm" style={{backgroundColor: "indigo"}}>Indigo</button>
            <button onClick={() => setColorPassToChaild("gray")} className="outline-none px-4 py-1 rounded-full text-white text-sm" style={{backgroundColor: "gray"}}>Gray</button>
            <button onClick={() => setColorPassToChaild("rgb(121, 74, 255)")} className="outline-none px-4 py-1 rounded-full text-white text-sm" style={{backgroundColor: "rgb(121, 74, 255)"}}>Purple</button>
          </div>
        </div>
        
        </>
    )
}

export default BgChange
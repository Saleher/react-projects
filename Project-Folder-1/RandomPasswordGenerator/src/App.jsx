import { useState, useCallback, useEffect, useRef } from "react"
import BgChange from "./components/BgChange";


function App() {
  const [color, setColor] = useState("#333");

  const [length, setLength] = useState(8);
  const [numberIsAllowed, setNumberIsAllowed] = useState(false);
  const [charIsAllowed, setCharIsAllowed] = useState(false);
  const [myPassword, setMyPassword] = useState("");



  //useRef hook
  const passwordRef = useRef(null);



  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberIsAllowed){
      str += '0123456789'
    }
    if(charIsAllowed){
      str += '!@#$%^*()_+'
    }
    for (let i = 0; i < length; i++) {
      let charIndex = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(charIndex);
    }
    setMyPassword(pass)    

  }, [length, numberIsAllowed, charIsAllowed, setMyPassword]);


  useEffect(() => {
    passwordGenerator()
  }, [length, numberIsAllowed, charIsAllowed, passwordGenerator  ])



  // Copy 
  const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 40);
    window.navigator.clipboard.writeText(myPassword);
  }, [myPassword]);



  return (
    <>
      <div className="w-full h-screen p-4 flex items-center justify-center" style={{backgroundColor: color}}>
        <div className="mb-5">
          <h1 className="text-center text-4xl text-white font-bold capitalize">Random Password generator</h1>
          <div className="w-full max-w-lg mx-auto shadow-md rounded-lg p-4 my-8 text-orange-500 bg-[rgba(0,0,0,0.2)]">
            <div className="flex shadow rounded-lg overflow-hidden mb-4 p-5">
              <input 
                type="text" 
                value={myPassword}
                className="w-full rounded p-4 rounded-tr-none rounded-br-none"
                placeholder="Password"
                readOnly
                ref={passwordRef}
              />
              <button 
                onClick={copyPasswordToClipBoard}
               className="rounded px-5 bg-orange-500 text-white rounded-tl-none rounded-bl-none">Copy</button>
            </div>
            <div className="flex justify-center gap-x-4 text-sm p-3">
              <div className="flex items-center gap-x-2">
                <input 
                  type="range"  
                  min={6}
                  max={30}
                  value={length}
                  className="cursor-pointer"   
                  onChange={(e) => {
                    setLength(e.target.value)
                  }}             
                />
                <label htmlFor="">Length : {length}</label>
              </div>
              <div className="flex items-center gap-x-2">
                  <input 
                    type="checkbox" 
                    className="mt-1 cursor-pointer"
                    defaultChecked={numberIsAllowed}
                    id="numberInput"
                    onChange={() => { 
                      setNumberIsAllowed((prev) => !prev)
                     }}
                  />
                  <label htmlFor="numberInput" className="cursor-pointer">Numbers</label>
              </div>
              <div className="flex items-center gap-x-2">
                  <input 
                    type="checkbox" 
                    className="mt-1 cursor-pointer"
                    defaultChecked={numberIsAllowed}
                    id="charInput"
                    onChange={() => { 
                      setCharIsAllowed((prev) => !prev)
                     }}
                  />
                  <label htmlFor="charInput" className="cursor-pointer">Charcters</label>
              </div>
            </div>
          </div>
          
        </div>
        <BgChange setColorPassToChaild={setColor} />
      </div>
       
    </>
  )
}

export default App

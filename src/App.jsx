import { useState } from "react" 

function App() {
  const [color, setColor] = useState("#000")

  return (
   <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
   <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
    <div className=" flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
      <button onClick={()=>setColor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"Red"}}>Red</button>
      <button onClick={()=>setColor("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"green"}}>green</button>
      <button onClick={()=>setColor("yellow")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"yellow"}}>Yellow</button>
      <button onClick={()=>setColor("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"blue"}}>Blue</button>
      <button onClick={()=>setColor("#FFFFFF")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:"white"}}>White</button>
      <button onClick={()=>setColor("#DEB887")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:"bisque"}}>Bisque</button>
      <button onClick={()=>setColor("#BC8F8F")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"#BC8F8F"}}>Rosybrown</button>
      <button onClick={()=>setColor("#DAA520")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"#DAA520"}}>Goldenrod</button>
      <button onClick={()=>setColor("#D2691E")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"#D2691E"}}>Chocolate</button>
      <button onClick={()=>setColor("#A52A2A")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"#A52A2A"}}>Brown</button>
      <button onClick={()=>setColor("#800000")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"#800000"}}>Maroon</button>
      <button onClick={()=>setColor("#4B0082")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"#4B0082"}}>Indigo</button>
      <button onClick={()=>setColor("#FF00FF")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"#FF00FF"}}>Magenta</button>
      <button onClick={()=>setColor("#FF1493")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"#FF1493"}}>Deeppink</button>
      <button onClick={()=>setColor("#00FF00")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"#00FF00"}}>Lime</button>
      <button onClick={()=>setColor("#00FFFF")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"#00FFFF"}}>Aqua</button>
    </div>
   </div>
   </div>
  )
}

export default App

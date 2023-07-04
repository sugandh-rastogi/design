import React from "react";
import Toggle from "./Toggle";
import Text from "./Text";
const Left = () =>{
    const [show,setShow]=React.useState(true);
    const status=()=>setShow(!show);
    return(
    <div className=" space-y-3  p-4  basis-96 ">
        <div >
        <div className=" space-y-3"> 
            <div className="flex justify-between">
                <h4 className="font-medium">Content description/Brief</h4>
                <Toggle onClick={status} st={show}></Toggle>
            </div>
            <input className="border border-gray-300 rounded-lg w-full h-20"></input>
            </div>
            <span className="text-gray-300  flex justify-end text-sm ">0/600</span>
        </div>
        <div>
        <div className=" space-y-3"> 
            <div className="flex justify-between">
                <h4 className="font-medium">Tone of Voice</h4>
                <Toggle onClick={status} st={show}></Toggle>
            </div>
            <input type="text" className="border border-gray-300 rounded-lg w-full h-10 font-medium px-4" defaultValue="Serious" ></input>
            </div>
            <span className="text-gray-300  flex justify-end text-sm ">7/60</span>
        </div>
        <div>
        <div className=" space-y-3"> 
            <div className="flex justify-between">
                <h4 className="font-medium">Keywords</h4>
                <Toggle onClick={status} st={show}></Toggle>
            </div>
            <div className="border border-gray-300 rounded-lg w-full h-10 font-medium px-4 py-2" ><Text></Text></div>
            </div>
        
        </div>
    </div>
    )
}

export default Left;
import React from "react";

const Box=()=>{
    return(
    <div className=" border rounded m-8">
        <div className="p-4">
        <div className=" border rounded border-blue-700 flex  flex-row-reverse"><button className="border rounded  border-blue-700 bg-blue-700 text-white p-1">Run Command</button></div>
        </div>
        <span className="border-b "></span>
        <div className="bg-blue-50 p-4">
            <button className="border border-blue-600 bg-white text-blue-600 rounded py-1 px-4"> Compose</button>
        </div>
     </div>
    )
}

export default Box;
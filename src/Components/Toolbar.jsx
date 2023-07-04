import React from "react";
import Box from "./Box";

const Toolbar=()=>{
    return(
        <div className=" h-10  w-screen  flex  flex-col space-y-96">
        <div className="flex border-b border-gray-300 p-1">
        <div className="flex border-r-2 p-1 border-gray-300 space-x-3 content-center">
        <button><img src="https://cdn-icons-png.flaticon.com/128/9429/9429050.png" className="w-5 "/></button>
        <button><img src="https://cdn-icons-png.flaticon.com/128/9428/9428935.png" className="w-5"/></button>
        
        
        </div>
        <div className="flex items-baseline space-x-3 border-r-2 p-1 border-gray-300">
        <button><img src="https://cdn-icons-png.flaticon.com/128/9018/9018036.png" className="w-6 h-6"/></button>
        <button><img src="https://cdn-icons-png.flaticon.com/128/9018/9018037.png" className="w-5 h-6"/></button>
        <button><img src="https://cdn-icons-png.flaticon.com/128/9018/9018038.png" className="w-5 h-5"/></button>
        <button><img src="https://cdn-icons-png.flaticon.com/128/9018/9018039.png" className="w-4 h-5"/></button>
        </div>
        <div className="flex  space-x-3  p-1 mt-1 ml-1">
        <button><i class="fa-solid fa-bold"></i></button>
        <button><i class="fa-solid fa-italic"></i></button>
        <button><i class="fa-solid fa-underline"></i></button>
        <button><i class="fa-solid fa-list"></i></button>
        <button><i class="fa-solid fa-list-ol"></i></button>
        </div>
        </div>
        <Box/>
        </div>
        )
}

export default Toolbar;
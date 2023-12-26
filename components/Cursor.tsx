'use client'
import { assets } from "@/utils/assets";
import { useState,useEffect } from "react";
import Image from "next/image";

const Cursor = () => {
    const [cursorPosition, setCursorPosition] = useState<{ x: number; y: number }>({ x: -100, y: -100 });

    useEffect(()=>
    {

    },[])

  return (
    <div>
        <Image 
           style={{top:`${cursorPosition.y}px`,left:`${cursorPosition.x}px`}}
           className="absolute transition-all ease-out duration-700 z-50"
           alt="cursor"
           src={assets.cursor}
           width={80}
           height={50}
        
        />
      
    </div>
  );
}

export default Cursor;

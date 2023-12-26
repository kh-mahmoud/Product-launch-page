'use client'
import { assets } from '@/utils/assets'
import Image from 'next/image'
import { useState,useEffect } from 'react'
import { frameworks,FrameworkProps} from '@/utils/frame-works'
import { cn } from '@/utils/tailwind-utils'
import { Poppins } from 'next/font/google'
import FrameworkRotation from '@/components/FrameworkRotation'
import CountDownTimer from '@/components/CountDownTimer'



const popins=Poppins({
  weight:"700",
  subsets:["latin"]
})

export default function Home() {
   const [currentFrameWork,setCurrentFrameWork]=useState<FrameworkProps>(frameworks[0])
   const [showBackground,setShowBackground]=useState(false)


   useEffect(()=>
   {
      let currentIndex=0
      const rotateFrameworks=()=>
      {
        setCurrentFrameWork(frameworks[currentIndex])
        currentIndex=(currentIndex+1)%frameworks.length
      }
       const intervalId = setInterval(rotateFrameworks,2000)
       return ()=>clearInterval(intervalId)
   },[])

   useEffect(()=>
   {
     setShowBackground(true)
   },[])

  return (
    <main className='w-full'>
       <div
        className={cn(
          "fixed inset-0 transition-color delay-100 duration-700 opacity-25",
          {
            "bg-purple-300": currentFrameWork === "qwik",
            "bg-sky-300": currentFrameWork === "safari",
            "bg-yellow-300": currentFrameWork === "chrome",
            "bg-teal-300": currentFrameWork === "tailwind",
            "bg-blue-300": currentFrameWork === "react",
            "bg-green-300": currentFrameWork === "vue",
            "bg-orange-400": currentFrameWork === "svelte",
            "bg-red-300": currentFrameWork === "mobile",
            "bg-neutral-300": currentFrameWork === "desktop",
          }
        )}
      />

      <div className='h-screen fixed w-full bg-bg-gradient bg-cover bg-center bg-no-repeat'/>
      <div className='fixed inset-0 opacity-30 bg-bg-img-1 bg-square-size' />
      <div className={`bg-black fixed inset-0  transition-opacity  duration-[1200ms] ${showBackground?"opacity-0":"opacity-100 z-50"}`}/>


      <div className=' mx-auto pt-20 max-w-7xl'>
          <div className={`flex flex-col items-center relative `}>
               <h1 className={`text-6xl text-center leading-snug  ${popins.className} `}>
                   <Image
                      className='mr-8 -mt-2 inline-block'
                      alt='figma'
                      src={assets.figma}
                      width={50}
                      height={50}
                   />
                   to <FrameworkRotation currentFramework={currentFrameWork}/> will <span  className={cn(
                          "transition-color duration-700 ",
                          {
                            "text-purple-300": currentFrameWork === "qwik",
                            "text-sky-300": currentFrameWork === "safari",
                            "text-yellow-300": currentFrameWork === "chrome",
                            "text-teal-300": currentFrameWork === "tailwind",
                            "text-blue-300": currentFrameWork === "react",
                            "text-green-300": currentFrameWork === "vue",
                            "text-orange-400": currentFrameWork === "svelte",
                            "text-red-300": currentFrameWork === "mobile",
                            "text-neutral-300": currentFrameWork === "desktop",
                          }
                        )}>never</span> be <br/> the same again
               </h1>
               <p className="mb-8 mt-8">
                  <span className="text-gray-300">
                    Join us for an AI launch event by{" "}
                  </span>
                  <Image
                    alt="Builder.io logo"
                    className="inline-block ml-1 -mt-1"
                    width={100}
                    height={20}
                    src={assets.builder}
                  />
                  {" + "}
                  <Image
                    alt="Figma logo"
                    className="inline-block mx-1"
                    width={55}
                    height={20}
                    src={assets.figmatwo}
                  />
                </p>

                <div className='mb-8'>
                    <button  className={cn(
                        " duration-200 text-black px-6 py-3 text-sm rounded-[8px] cursor-pointer font-semibold",
                        {
                          "bg-purple-300": currentFrameWork === "qwik",
                          "bg-sky-300": currentFrameWork === "safari",
                          "bg-yellow-300": currentFrameWork === "chrome",
                          "bg-teal-300": currentFrameWork === "tailwind",
                          "bg-blue-300": currentFrameWork === "react",
                          "bg-green-300": currentFrameWork === "vue",
                          "bg-orange-400": currentFrameWork === "svelte",
                          "bg-red-300": currentFrameWork === "mobile",
                          "bg-neutral-300": currentFrameWork === "desktop",
                        }
                      )}>Claim Ticket</button>
                </div>
                 <CountDownTimer currentFramework={currentFrameWork}/>
          </div>
      </div>
    </main>
  )
}

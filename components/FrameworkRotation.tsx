import { FrameworkProps } from '@/utils/frame-works';
import React from 'react';
import { frameworks } from '@/utils/frame-works';
import Image from 'next/image';
import { assets } from '@/utils/assets';
import { cn } from '@/utils/tailwind-utils';

const FrameworkRotation = ({currentFramework}: {currentFramework: FrameworkProps;
  }) => {

  return (
    <div className='w-[80px] h-[80px] relative inline-block'>
        {frameworks.map((name,index)=>(
            <Image
               key={name}
               src={assets[name]}
               alt={name}
               width={80}
               height={80}
               className={cn(
                "w-full h-full object-contain object-center absolute top-4 left-0 transition-all duration-300 ",
                currentFramework === name
                  ? "opacity-100 translate-y-2 "
                  : "opacity-0 "
                  
              )}
            />
        ))}
    </div>
  );
}

export default FrameworkRotation;

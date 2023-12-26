'use client'
import { CalculateTimeEvent } from "@/utils/Count-down";
import { useState,useEffect } from "react";
import { FrameworkProps } from "@/utils/frame-works";
import { TimeUnit } from "./TimeUnit";

const CountDownTimer = ({currentFramework}:{currentFramework:FrameworkProps}) => {

    const [countdown, setCountdown] = useState(CalculateTimeEvent());

    useEffect(() => {
      const interval = setInterval(() => {
        setCountdown(CalculateTimeEvent());
      }, 1000);
    },[])

  return (
    <div className={"text-center  flex gap-[18px]"}>
        <div className="mr-5">
          <TimeUnit
              label="DAYS"
              value={countdown.days}
              currentFramework={currentFramework}
          />
        </div>
          
        <TimeUnit
          label="HOURS"
          value={countdown.hours}
          currentFramework={currentFramework}
        />
        <TimeUnit
          label="MINUTES"
          value={countdown.minutes}
          currentFramework={currentFramework}
        />
        <TimeUnit
          label="SECONDS"
          value={countdown.seconds}
          currentFramework={currentFramework}
        />
    </div>
  );
}

export default CountDownTimer;

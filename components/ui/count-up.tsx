"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface CountUpProps {
  end: number
  duration?: number
  prefix?: string
  suffix?: string
  staticText?: string
  className?: string
}

export function CountUp({
  end,
  duration = 2000,
  prefix = "",
  suffix = "",
  staticText = "",
  className
}: CountUpProps) {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    let startTime: number
    let animationFrame: number
    
    const countUp = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = timestamp - startTime
      const percentage = Math.min(progress / duration, 1)
      
      setCount(Math.floor(percentage * end))
      
      if (percentage < 1) {
        animationFrame = requestAnimationFrame(countUp)
      }
    }
    
    animationFrame = requestAnimationFrame(countUp)
    
    return () => {
      cancelAnimationFrame(animationFrame)
    }
  }, [end, duration])
  
  return (
    <span className={cn(className)}>
      {prefix}{count}{suffix} {staticText}
    </span>
  )
} 
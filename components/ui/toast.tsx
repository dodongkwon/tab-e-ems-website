"use client"

import { useEffect, useState } from "react"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"
import { IToastProps } from "@/hooks/use-toast"

interface ToastProps extends IToastProps {
  onDismiss: () => void
}

export function Toast({
  title,
  description,
  variant = "default",
  onDismiss,
  duration = 3000,
}: ToastProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(onDismiss, 300) // 애니메이션 종료 후 실제 제거
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, onDismiss])

  return (
    <div
      className={cn(
        "fixed right-4 top-4 z-50 max-w-md rounded-md border p-4 shadow-md transition-all duration-300",
        {
          "bg-white text-black": variant === "default",
          "bg-destructive text-white": variant === "destructive",
        },
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[-10px]"
      )}
    >
      <div className="flex justify-between items-start gap-2">
        <div>
          <h3 className="font-semibold">{title}</h3>
          {description && <p className="text-sm mt-1">{description}</p>}
        </div>
        <button
          onClick={() => {
            setIsVisible(false)
            setTimeout(onDismiss, 300)
          }}
          className={cn("rounded-full p-1 hover:bg-black/10", {
            "hover:bg-white/20": variant === "destructive",
          })}
        >
          <X size={16} />
          <span className="sr-only">닫기</span>
        </button>
      </div>
    </div>
  )
} 
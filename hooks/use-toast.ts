import { useState, useEffect } from "react"

export type ToastVariant = "default" | "destructive"

export interface IToastProps {
  title: string
  description?: string
  variant?: ToastVariant
  duration?: number
  id?: string
}

export function useToast() {
  const [toasts, setToasts] = useState<(IToastProps & { id: string })[]>([])

  const toast = (props: IToastProps) => {
    const id = Math.random().toString(36).substring(2, 9)
    const newToast = { ...props, id, duration: props.duration ?? 3000 }
    setToasts((prev) => [...prev, newToast])
  }

  const dismissToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id))
  }

  return {
    toast,
    toasts,
    dismissToast,
  }
} 
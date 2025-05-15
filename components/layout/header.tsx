"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "개요", href: "#overview" },
  { name: "기능", href: "#features" },
  { name: "혜택", href: "#benefits" },
  { name: "사례", href: "#cases" },
  { name: "비디오 가이드", href: "#video-guide" },
  { name: "요금제", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
]

export function Header() {
  const pathname = usePathname()
  const isMainPage = pathname === "/"
  
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between p-4">
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold">TAB EMS</span>
        </Link>
        
        <nav className="hidden md:flex items-center justify-center flex-1 space-x-6">
          {navigation.map((item) => (
            <Link 
              key={item.name} 
              href={isMainPage ? item.href : `/${item.href}`}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button variant="outline" asChild>
            <Link href="/login">로그인</Link>
          </Button>
          <Button asChild>
            <Link href={isMainPage ? "#contact" : "/#contact"}>문의하기</Link>
          </Button>
        </div>
      </div>
    </header>
  )
} 
"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useCallback } from "react"

const navigation = [
  { name: "개요", href: "#hero" },
  { name: "기능", href: "#features" },
  { name: "혜택", href: "#benefits" },
  { name: "사례", href: "#testimonials" },
  { name: "필수 가이드", href: "#video-guide" },
  { name: "요금제", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
]

export function Header() {
  const pathname = usePathname()
  const isMainPage = pathname === "/"
  
  const scrollToSection = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!isMainPage && !href.startsWith('#')) return // 메인 페이지가 아닐 경우 기본 링크 동작 유지
    
    e.preventDefault()
    
    // '#'으로 시작하는 링크인 경우 ID만 추출
    const targetId = href.startsWith('#') ? href.substring(1) : href
    const targetElement = document.getElementById(targetId)
    
    if (targetElement) {
      // 부드럽게 스크롤
      window.scrollTo({
        top: targetElement.offsetTop - 80, // 헤더 높이 고려하여 약간 위로 조정
        behavior: 'smooth'
      })
    } else if (!isMainPage) {
      // 타겟 요소가 없고 메인 페이지가 아닐 경우 메인 페이지로 이동
      window.location.href = `/${href}`
    }
  }, [isMainPage])
  
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between p-4">
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold">TAB-E</span>
        </Link>
        
        <nav className="hidden md:flex items-center justify-center flex-1 space-x-6">
          {navigation.map((item) => (
            <a 
              key={item.name} 
              href={isMainPage ? item.href : `/${item.href}`}
              onClick={(e) => scrollToSection(e, item.href)}
              className="text-sm font-medium hover:text-primary transition-colors cursor-pointer"
            >
              {item.name}
            </a>
          ))}
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button variant="outline" asChild>
            <Link href="/login">로그인</Link>
          </Button>
          <Button asChild>
            <a 
              href={isMainPage ? "#contact" : "/#contact"}
              onClick={(e) => isMainPage && scrollToSection(e, "#contact")}
            >
              문의하기
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
} 
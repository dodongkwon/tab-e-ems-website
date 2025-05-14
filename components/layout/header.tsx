import Link from "next/link"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "개요", href: "#overview" },
  { name: "기능", href: "#features" },
  { name: "혜택", href: "#benefits" },
  { name: "사례", href: "#cases" },
  { name: "요금제", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
  { name: "고객지원", href: "/support" },
]

export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between p-4">
        <div className="flex items-center">
          <Link href="/" className="flex items-center mr-8">
            <span className="text-2xl font-bold">TAB-E EMS</span>
          </Link>
          <nav className="hidden md:flex space-x-6">
            {navigation.map((item) => (
              <Link 
                key={item.name} 
                href={item.href}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="outline" asChild>
            <Link href="/login">로그인</Link>
          </Button>
          <Button asChild>
            <Link href="#contact">문의하기</Link>
          </Button>
        </div>
      </div>
    </header>
  )
} 
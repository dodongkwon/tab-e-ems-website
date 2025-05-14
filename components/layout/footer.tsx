import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">TAB-E EMS</h3>
            <p className="text-sm text-muted-foreground">
              기업 고객을 위한 에너지 사용량 분석 및 효율화를 지원하는 SaaS 기반 솔루션
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-4">바로가기</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#overview" className="hover:text-primary">개요</Link>
              </li>
              <li>
                <Link href="#features" className="hover:text-primary">기능</Link>
              </li>
              <li>
                <Link href="#benefits" className="hover:text-primary">혜택</Link>
              </li>
              <li>
                <Link href="#cases" className="hover:text-primary">사례</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">서비스</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#pricing" className="hover:text-primary">요금제</Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-primary">FAQ</Link>
              </li>
              <li>
                <Link href="/support" className="hover:text-primary">고객지원</Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-primary">문의하기</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">회사 정보</h4>
            <address className="not-italic text-sm text-muted-foreground">
              <p>주소: 서울특별시 강남구</p>
              <p>이메일: contact@tabe-ems.com</p>
              <p>전화: 02-1234-5678</p>
            </address>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} TAB-E EMS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 
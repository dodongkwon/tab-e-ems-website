import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronRight } from "lucide-react"
import Image from "next/image"

export function OverviewSection() {
  return (
    <section id="overview" className="py-16 md:py-24 bg-accent/50">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <Badge variant="outline" className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/20">
            솔루션 개요
          </Badge>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              중소기업을 위한 맞춤형 에너지 관리 솔루션
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              TAB-E는 연간 전력 비용 5천만원 미만의 중소 제조기업을 위해 특별히 설계되었습니다.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="overflow-hidden">
            <div className="h-2 bg-primary"></div>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 rounded-full bg-primary/10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">문제점</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>날로 상승하는 에너지 비용</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>2025년부터 강화되는 탄소중립 규제</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>기존 EMS의 고가 비용과 복잡한 구조</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden">
            <div className="h-2 bg-primary"></div>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 rounded-full bg-primary/10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M9.5 14.4V2.6a1.5 1.5 0 0 0-3 0v11.8a3 3 0 1 0 3 0z" />
                    <path d="M16.5 14.4V2.6a1.5 1.5 0 0 0-3 0v11.8a3 3 0 1 0 3 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">해결책</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>별도 하드웨어 설치 없는 소프트웨어 솔루션</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>직관적인 사용자 인터페이스</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>초기설치비용 0원의 합리적 가격</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden">
            <div className="h-2 bg-primary"></div>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 rounded-full bg-primary/10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">효과</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>평균 10%의 에너지 비용 절감</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>탄소배출량 자동 계산 및 보고서 생성</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>6개월 이내 투자 비용 회수</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 bg-background rounded-xl p-6 md:p-8 border">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
            <div className="rounded-full overflow-hidden w-24 h-24 md:w-32 md:h-32 flex-shrink-0 border-4 border-primary/20 bg-primary/10 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-primary/60">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div className="flex-1">
              <blockquote className="text-lg md:text-xl italic mb-4">
                "우리는 중소 제조기업도 전력 데이터 분석과 탄소 관리의 혜택을 누릴 수 있어야 한다고 생각합니다.{'\n\n'}
                TAB-E는 별도의 하드웨어 설치 없이 기존 PC에서 바로 사용할 수 있으며, 평균 10%의 에너지 비용 절감 효과를 제공합니다."
              </blockquote>
              
              <div>
                <p className="font-semibold">도현우</p>
                <p className="text-sm text-muted-foreground">DITAB CEO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
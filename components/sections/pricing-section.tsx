"use client"

import { useState } from "react"
import { Check, CheckCircle2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import Link from "next/link"

const pricingPlans = [
  {
    name: "베이직",
    description: "또는 연 70만원 (17% 할인)",
    price: "70,000",
    period: "월",
    features: [
      "전력 사용량 실시간 모니터링",
      "대시보드",
      "피크 알림 기능",
      "사용 히스토리",
      "탄소배출량 기본 계산",
    ],
    cta: "지금 시작하기",
    popular: false
  },
  {
    name: "프로",
    description: " 또는 연 150만원 (17% 할인)",
    price: "150,000",
    period: "월",
    features: [
      "베이직 플랜의 모든 기능",
      "고급 데이터 분석",
      "선택 기간 상세 리포트",
      "ESG 기본 보고서",
      "SLLM 기본 보고서",
      "전화 및 이메일 기술 지원"
    ],
    cta: "무료 체험 신청",
    popular: true
  },
  {
    name: "프리미엄",
    description: "곧 출시 예정",
    price: "준비중",
    period: "",
    features: [
      "프로 플랜의 모든 기능",
      "맞춤형 ESG 보고서",
      "AI채팅 지원 기능",
    ],
    cta: "문의하기",
    popular: false
  }
]

export function PricingSection() {
  const [annualBilling, setAnnualBilling] = useState(false)

  return (
    <section id="pricing" className="py-16 md:py-24 bg-accent/50">
      <div className="container mx-auto px-4 max-w-[1400px]">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            투명한 요금제
          </h2>
          <p className="text-lg text-muted-foreground">
            기업 규모와 필요에 맞는 최적의 요금제를 선택하세요.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 베이직 플랜 */}
          <Card className="relative border-2 flex flex-col h-full">
            <CardHeader className="pb-0">
              <div className="mb-1 font-bold text-xl">{pricingPlans[0].name}</div>
              <div className="text-sm text-muted-foreground mb-2">{pricingPlans[0].description}</div>
              <div className="flex items-end gap-1 mb-4">
                <span className="text-4xl font-extrabold">{pricingPlans[0].price}</span>
                {pricingPlans[0].period && (
                  <span className="text-lg mb-1 text-muted-foreground">원/{pricingPlans[0].period}</span>
                )}
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-3 py-4">
                {pricingPlans[0].features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <Link href="#contact">{pricingPlans[0].cta}</Link>
              </Button>
            </CardFooter>
          </Card>

          {/* 프로 플랜 */}
          <Card className="relative border-2 border-primary flex flex-col h-full shadow-lg">
            <div className="absolute -top-3 right-0 left-0 mx-auto w-fit">
              <Badge className="bg-primary text-primary-foreground">인기 요금제</Badge>
            </div>
            <CardHeader className="pb-0">
              <div className="mb-1 font-bold text-xl">{pricingPlans[1].name}</div>
              <div className="text-sm text-muted-foreground mb-2">{pricingPlans[1].description}</div>
              <div className="flex items-end gap-1 mb-4">
                <span className="text-4xl font-extrabold">{pricingPlans[1].price}</span>
                {pricingPlans[1].period && (
                  <span className="text-lg mb-1 text-muted-foreground">원/{pricingPlans[1].period}</span>
                )}
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="bg-primary/10 p-3 rounded-lg mb-4 border border-primary/20">
                <div className="flex items-center gap-2 text-primary font-medium">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  베이직 플랜의 모든 기능 포함
                </div>
              </div>
              <ul className="space-y-3 py-2">
                {pricingPlans[1].features.slice(1).map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" asChild>
                <Link href="#contact">{pricingPlans[1].cta}</Link>
              </Button>
            </CardFooter>
          </Card>

          {/* 프리미엄 플랜 */}
          <Card className="relative border-2 flex flex-col h-full bg-muted/30">
            <CardHeader className="pb-0">
              <div className="mb-1 font-bold text-xl">{pricingPlans[2].name}</div>
              <div className="text-sm text-muted-foreground mb-2">{pricingPlans[2].description}</div>
              <div className="flex items-end gap-1 mb-4">
                <span className="text-4xl font-extrabold">{pricingPlans[2].price}</span>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="bg-muted/50 p-3 rounded-lg mb-4 border border-muted">
                <div className="flex items-center gap-2 text-muted-foreground font-medium">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  프로 플랜의 모든 기능 포함
                </div>
              </div>
              <ul className="space-y-3 py-2">
                {pricingPlans[2].features.slice(1).map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild disabled>
                <Link href="#contact">{pricingPlans[2].cta}</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
} 
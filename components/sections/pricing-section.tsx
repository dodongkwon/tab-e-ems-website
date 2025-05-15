import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
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
    description: "또는 연 250만원 (17% 할인)",
    price: "250,000",
    period: "월",
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
  return (
    <section id="pricing" className="py-16 md:py-24 bg-accent/50">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            투명한 요금제
          </h2>
          <p className="text-lg text-muted-foreground">
            기업 규모와 필요에 맞는 최적의 요금제를 선택하세요.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index} 
              className={`flex flex-col ${plan.popular ? 'border-primary shadow-lg relative' : ''}`}
            >
              {plan.popular && (
                <div className="absolute top-0 inset-x-0 -translate-y-1/2 flex justify-center">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    인기 요금제
                  </span>
                </div>
              )}
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground ml-1">원/{plan.period}</span>}
                </div>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full" 
                  variant={plan.popular ? "default" : "outline"}
                  asChild
                >
                  <Link href="#contact">{plan.cta}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 
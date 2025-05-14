import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const pricingPlans = [
  {
    name: "Basic",
    description: "소규모 기업을 위한 기본 에너지 관리 서비스",
    price: "299,000",
    period: "월",
    features: [
      "전력 사용량 실시간 모니터링",
      "월간 에너지 사용 리포트",
      "기본 전력 요금 분석",
      "이메일 기술 지원",
      "웹 대시보드 접근",
    ],
    cta: "지금 시작하기",
    popular: false
  },
  {
    name: "Professional",
    description: "중견 기업을 위한 고급 에너지 관리 솔루션",
    price: "699,000",
    period: "월",
    features: [
      "Basic 플랜의 모든 기능",
      "시간대별 사용량 상세 분석",
      "에너지 효율화 제안",
      "최대수요 관리 알림",
      "전화 및 이메일 기술 지원",
      "API 연동 지원"
    ],
    cta: "무료 체험 신청",
    popular: true
  },
  {
    name: "Enterprise",
    description: "대기업을 위한 맞춤형 에너지 관리 시스템",
    price: "문의",
    period: "",
    features: [
      "Professional 플랜의 모든 기능",
      "복수 사업장 통합 관리",
      "맞춤형 에너지 최적화 컨설팅",
      "전담 기술 지원 매니저",
      "현장 교육 및 설치 지원",
      "시스템 맞춤 개발"
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
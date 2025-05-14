import { Button } from "@/components/ui/button"
import Link from "next/link"

const benefits = [
  {
    title: "비용 절감",
    description: "에너지 사용량 최적화를 통해 전력 요금을 평균 15-20% 절감",
    value: "15-20%",
    icon: "💸"
  },
  {
    title: "에너지 효율 향상",
    description: "설비 운영 최적화를 통한 에너지 효율성 개선",
    value: "30%+",
    icon: "⚡"
  },
  {
    title: "관리 시간 단축",
    description: "자동화된 모니터링과 리포팅으로 관리 시간 절감",
    value: "60%",
    icon: "⏱️"
  },
  {
    title: "탄소 배출 감소",
    description: "에너지 효율화를 통한 탄소 발자국 감소",
    value: "25%+",
    icon: "🌿"
  }
]

export function BenefitsSection() {
  return (
    <section id="benefits" className="py-16 md:py-24 bg-accent/50">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            TAB-E EMS 도입 시 얻을 수 있는 혜택
          </h2>
          <p className="text-lg text-muted-foreground">
            기업의 에너지 관리 혁신을 통해 비용 절감과 지속가능한 성장을 지원합니다.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-6 border text-center"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <div className="text-3xl font-bold text-primary my-3">{benefit.value}</div>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button size="lg" asChild>
            <Link href="#cases">
              고객 사례 보기
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
} 
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "데이터 시각화",
    description: "복잡한 에너지 사용 데이터를 직관적인 차트와 그래프로 시각화하여 쉽게 분석할 수 있습니다.",
    icon: "📊",
    isNew: true
  },
  {
    title: "사용량 패턴 분석",
    description: "시간대별, 요일별, 계절별 전력 사용 패턴을 분석하여 효율적인 에너지 관리 방안을 제시합니다.",
    icon: "📈",
    isNew: false
  },
  {
    title: "요금 최적화",
    description: "계약전력 최적화, 최대수요 관리 등을 통해 전력 요금을 절감할 수 있는 방안을 제공합니다.",
    icon: "💰",
    isNew: false
  },
  {
    title: "KEPCO API 연동",
    description: "한국전력공사 API와 연동하여 실시간으로 전력 사용 데이터를 수집하고 분석합니다.",
    icon: "🔄",
    isNew: false
  },
  {
    title: "알림 서비스",
    description: "비정상적인 전력 사용이나 피크 수요 발생 시 실시간 알림을 제공합니다.",
    icon: "🔔",
    isNew: true
  },
  {
    title: "리포트 생성",
    description: "월별, 분기별, 연도별 에너지 사용 보고서를 자동으로 생성하여 경영 의사결정을 지원합니다.",
    icon: "📝",
    isNew: false
  }
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            강력한 기능으로 에너지 관리를 혁신합니다
          </h2>
          <p className="text-lg text-muted-foreground">
            TAB-E EMS는 기업의 에너지 효율화와 비용 절감을 위한 다양한 기능을 제공합니다.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-card rounded-xl p-6 border shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl">{feature.icon}</div>
                {feature.isNew && <Badge variant="default">신규</Badge>}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 
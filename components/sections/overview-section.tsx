import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function OverviewSection() {
  return (
    <section id="overview" className="py-16 md:py-24 bg-accent/50">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            에너지 관리 시스템(EMS)이란?
          </h2>
          <p className="text-lg text-muted-foreground">
            전력 사용량 분석을 통해 효율적인 에너지 관리와 비용 절감을 지원하는 통합 솔루션입니다.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>실시간 모니터링</CardTitle>
              <CardDescription>
                한전 데이터 연동을 통한 실시간 전력 사용량 모니터링
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                KEPCO API 연동으로 기업의 전력 사용 패턴을 실시간으로 추적하고 
                분석하여 에너지 낭비 요소를 즉시 발견합니다.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>효율화 진단</CardTitle>
              <CardDescription>
                AI 기반 에너지 효율화 진단 및 개선 방안 제시
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                축적된 데이터를 기반으로 기업의 에너지 사용 효율성을 
                진단하고 최적화된 개선 방안을 제안합니다.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>비용 절감</CardTitle>
              <CardDescription>
                전력 요금 절감을 위한 최적화 전략 수립
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                최대 수요 관리, 계약전력 최적화, 시간대별 사용량 분산 등을 통해
                전력 요금을 효과적으로 절감할 수 있는 방안을 제공합니다.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
} 
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const cases = [
  {
    company: "대형 제조업체 A",
    industry: "제조",
    challenge: "높은 전력 요금과 비효율적인 에너지 사용으로 인한 비용 증가",
    solution: "TAB-E EMS 도입으로 실시간 모니터링 및 설비 운영 최적화",
    result: "연간 전력 요금 18% 절감, 최대수요 관리로 계약전력 최적화",
    savings: "18%"
  },
  {
    company: "물류센터 B",
    industry: "물류",
    challenge: "대형 창고 시설의 냉난방 에너지 과다 사용",
    solution: "에너지 사용 패턴 분석 및 시간대별 운영 최적화",
    result: "냉난방 에너지 25% 절감, 냉동설비 효율성 개선",
    savings: "25%"
  },
  {
    company: "대형 오피스 빌딩 C",
    industry: "부동산",
    challenge: "다수의 임대 공간에 대한 에너지 사용량 모니터링 어려움",
    solution: "층별, 구역별 에너지 사용량 실시간 분석 시스템 구축",
    result: "공용 공간 에너지 사용 20% 절감, 임대 공간 사용량 투명화",
    savings: "20%"
  }
]

export function CasesSection() {
  return (
    <section id="cases" className="py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            고객 성공 사례
          </h2>
          <p className="text-lg text-muted-foreground">
            TAB-E EMS를 통해 실제 기업들이 달성한 에너지 비용 절감 및 효율화 사례를 확인하세요.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cases.map((case_, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{case_.company}</CardTitle>
                    <CardDescription>업종: {case_.industry}</CardDescription>
                  </div>
                  <Badge variant="outline" className="text-primary border-primary">
                    절감률 {case_.savings}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-1">문제 상황</h4>
                    <p className="text-sm text-muted-foreground">{case_.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">적용 솔루션</h4>
                    <p className="text-sm text-muted-foreground">{case_.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">도입 효과</h4>
                    <p className="text-sm text-muted-foreground">{case_.result}</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t pt-6 text-center">
                <div className="w-full">
                  <p className="text-sm">도입 문의: <span className="font-semibold">02-1234-5678</span></p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 
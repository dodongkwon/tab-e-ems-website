"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"

export function BenefitsSection() {
  return (
    <section id="benefits" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6 mx-auto max-w-[1400px]">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <Image
            src="/dashboard.jpg"
            width={1200}
            height={800}
            alt="TAB-E 사용 모습"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center shadow-lg"
          />
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <Badge variant="outline" className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/20">
                도입 효과
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                평균 10%의 에너지 비용 절감 효과
              </h2>
              <p className="text-muted-foreground md:text-lg/relaxed">
                TAB-E 도입 기업은 평균적으로 연간 8-10%의 에너지 비용을 절감하고 있습니다.
              </p>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <span className="font-bold">1</span>
                </div>
                <div>
                  <p className="font-medium text-lg">피크 전력 관리를 통한 기본요금 절감: 4-6%</p>
                  <p className="text-muted-foreground">
                    전력 피크 발생 패턴을 분석하고 알림을 제공하여 기본요금을 효과적으로 절감합니다.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <span className="font-bold">2</span>
                </div>
                <div>
                  <p className="font-medium text-lg">에너지 낭비 패턴 식별 및 개선: 2-4%</p>
                  <p className="text-muted-foreground">
                    15분 단위 전력 사용 패턴 분석을 통해 불필요한 에너지 낭비 요소를 식별하고 개선합니다.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <span className="font-bold">3</span>
                </div>
                <div>
                  <p className="font-medium text-lg">운영 최적화: 2-3%</p>
                  <p className="text-muted-foreground">
                    요일 및 시간대별 전력 요금 추이를 파악하여 운영 일정을 최적화합니다.
                  </p>
                </div>
              </li>
            </ul>
            <div className="bg-muted p-6 rounded-lg mt-4">
              <p className="font-medium">투자 대비 수익률</p>
              <p className="text-muted-foreground">
                월 전기요금 300~400만원 기준으로 월 30~40만원 절감 효과가 일반적이며, 이는 구독료의 4~5배에 해당하는
                투자수익률을 제공합니다. 대부분의 고객이 6개월 이내에 투자 비용을 회수할 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
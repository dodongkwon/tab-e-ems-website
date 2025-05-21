"use client"

import { useState } from "react"
import { ArrowUpRight, Zap, TrendingDown, LineChart, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

export function BenefitsSection() {
  const [isHovered, setIsHovered] = useState<number | null>(null)

  return (
    <section id="benefits" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-background via-muted/50 to-background">
      <div className="container px-4 md:px-6 mx-auto max-w-[1400px]">
        <div className="flex flex-col items-center text-center mb-16">
          <Badge variant="outline" className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/20 mb-4">
            도입 효과
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight mb-4">평균 10%의 에너지 비용 절감 효과</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
            TAB-E 도입 기업은 평균적으로 연간 8-10%의 에너지 비용을 절감하고 있습니다.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch mb-16">
          <div className="relative flex items-center">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/5 rounded-full opacity-50 blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/5 rounded-full opacity-50 blur-3xl"></div>

            <div className="relative bg-background rounded-2xl shadow-xl overflow-hidden border border-border w-full h-full flex items-center">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/50"></div>
              <img
                src="/entab.png"
                alt="TAB-E 에너지 관리 시스템"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="space-y-8">
              <div className="flex">
                <div className="mr-6 relative">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Zap className="h-8 w-8" />
                  </div>
                  <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary/20 to-transparent"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 flex items-center">
                    피크 전력 관리를 통한 기본요금 절감
                    <span className="ml-3 text-primary font-bold">4-6%</span>
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    전력 피크 발생 패턴을 분석하고 알림을 제공하여 기본요금을 효과적으로 절감합니다.
                  </p>
                  <div className="bg-muted p-4 rounded-lg border border-border">
                    <div className="flex items-center">
                      <LineChart className="h-5 w-5 text-primary mr-2" />
                      <span className="text-sm text-muted-foreground">피크 발생 시간 예측 및 알림 기능</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex">
                <div className="mr-6 relative">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <TrendingDown className="h-8 w-8" />
                  </div>
                  <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary/20 to-transparent"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 flex items-center">
                    에너지 낭비 패턴 식별 및 개선
                    <span className="ml-3 text-primary font-bold">2-4%</span>
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    15분 단위 전력 사용 패턴 분석을 통해 불필요한 에너지 낭비 요소를 식별하고 개선합니다.
                  </p>
                  <div className="bg-muted p-4 rounded-lg border border-border">
                    <div className="flex items-center">
                      <BarChart3 className="h-5 w-5 text-primary mr-2" />
                      <span className="text-sm text-muted-foreground">시간대별 에너지 사용 패턴 분석</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex">
                <div className="mr-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-8 w-8"
                    >
                      <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
                      <path d="M10 2c1 .5 2 2 2 5" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 flex items-center">
                    운영 최적화
                    <span className="ml-3 text-primary font-bold">2-3%</span>
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    요일 및 시간대별 전력 요금 추이를 파악하여 운영 일정을 최적화합니다.
                  </p>
                  <div className="bg-muted p-4 rounded-lg border border-border">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-primary mr-2"
                      >
                        <rect width="18" height="18" x="3" y="3" rx="2" />
                        <path d="M3 9h18" />
                        <path d="M9 21V9" />
                      </svg>
                      <span className="text-sm text-muted-foreground">요일별, 시간대별 최적 운영 일정 추천</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-background rounded-2xl shadow-lg p-8 relative overflow-hidden border border-border">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full opacity-30 -mr-32 -mt-32"></div>

          <div className="relative">
            <h3 className="text-2xl font-bold mb-6">투자 대비 수익률</h3>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                { title: "월 평균 전기요금", value: "300~400만원", icon: "💰" },
                { title: "월 평균 절감액", value: "30~40만원", icon: "📉" },
                { title: "투자 회수 기간", value: "6개월 이내", icon: "⏱️" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-muted rounded-xl p-6 border border-border transition-all duration-300"
                  whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}
                  onHoverStart={() => setIsHovered(index)}
                  onHoverEnd={() => setIsHovered(null)}
                >
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h4 className="font-medium text-muted-foreground mb-2">{item.title}</h4>
                  <p className="text-2xl font-bold">{item.value}</p>
                </motion.div>
              ))}
            </div>

            <p className="text-muted-foreground mb-4 text-center">
              월 전기요금 300~400만원 기준으로 월 30~40만원 절감 효과가 일반적이며, 이는 구독료의 4~5배에 해당하는
              투자수익률을 제공합니다.
            </p>
            <p className="text-muted-foreground mb-8 text-center">
              대부분의 고객이 6개월 이내에 투자 비용을 회수할 수 있습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 
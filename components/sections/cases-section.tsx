"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight, Factory, TrendingUp, CheckCircle2, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion, AnimatePresence } from "framer-motion"

type CaseStudy = {
  id: string
  company: string
  industry: string
  challenge: string
  solution: string
  results: string
  quote: string
  savings: string
  contact: string
  position: string
  benefits: string[]
}

export function CasesSection() {
  const caseStudies: CaseStudy[] = [
    {
      id: "hanjin-chemical",
      company: "한진화학 (Hanjin Chemical)",
      industry: "화학 제조 (플라스틱 첨가제 생산)",
      challenge: "24시간 가동되는 생산라인 운영으로 인한 높은 전력 피크와 예측 불가능한 전력 요금 변동",
      solution: "TAB-E EMS 프리미엄 플랜 도입으로 실시간 전력 모니터링 및 피크 관리 최적화",
      results: "연간 전력 요금 16.5% 절감, 피크 부하 관리로 기본요금 최적화",
      quote: "TAB-E를 도입한 후 월 평균 180만원의 전기요금이 절감되었습니다. 특히 피크 시간대 전력 사용을 분산시키는 알림 기능이 큰 도움이 되었고, ESG 보고서 자동 생성 기능으로 본사에 필요한 보고 작업이 훨씬 수월해졌습니다.",
      savings: "16.5%",
      contact: "박진우",
      position: "공장장, 울산공장",
      benefits: [
        "실시간 전력 모니터링",
        "피크 시간대 알림 기능",
        "ESG 보고서 자동 생성",
        "월 평균 180만원 절감"
      ],
    },
    {
      id: "godo-chemical",
      company: "고도화학 (Godo Chemical)",
      industry: "화학 첨가제 제조",
      challenge: "소규모 제조기업으로 전문 에너지 관리 인력 부재와 탄소중립 대응 어려움",
      solution: "TAB-E EMS 베이직 플랜을 통한 간편한 전력 관리 시스템 구축",
      results: "월 평균 전력 요금 12% 절감, 비전문가도 쉽게 활용 가능한 관리 체계 수립",
      quote: "중소기업으로 별도 에너지 관리 인력을 두기 어려웠는데, TAB-E는 직관적인 인터페이스로 별도 교육 없이도 쉽게 사용할 수 있었습니다. 월 7만원의 투자로 매월 약 35만원의 전기요금을 절약하고 있어 비용 대비 효과가 탁월합니다.",
      savings: "12%",
      contact: "김동현",
      position: "대표",
      benefits: [
        "직관적인 사용자 인터페이스",
        "별도 교육 없이 쉬운 사용",
        "월 7만원 투자로 35만원 절감",
        "비전문가도 쉽게 활용 가능"
      ],
    },
    {
      id: "daesong-chemicals",
      company: "대송정밀화학 (Daesong Precision Chemicals)",
      industry: "정밀화학 제품 제조",
      challenge: "EU 수출 제품 관련 탄소배출량 정보 요구 증가와 에너지 비용 상승",
      solution: "TAB-E EMS 프로 플랜을 활용한 탄소배출량 자동 계산 및 보고서 생성",
      results: "전력 관리 최적화로 15% 비용 절감, EU CBAM 대응 위한 데이터 확보",
      quote: "EU로 수출하는 제품의 탄소발자국 정보 요구가 늘어나는 상황에서 TAB-E는 정확한 데이터를 제공해 주는 믿을 수 있는 솔루션이 되었습니다. 에너지 절감과 함께 ESG 대응을 동시에 해결할 수 있어 매우 만족스럽습니다.",
      savings: "15%",
      contact: "이지원",
      position: "이사, 생산관리팀",
      benefits: [
        "탄소배출량 자동 계산",
        "EU CBAM 대응 데이터 확보",
        "ESG 보고서 자동 생성",
        "에너지 비용 15% 절감"
      ],
    },
    {
      id: "doosohn-chemical",
      company: "두손화학 (Doosohn Chemical)",
      industry: "접착제 및 코팅제 제조",
      challenge: "복잡한 생산 공정의 비효율적 전력 사용과 높은 피크 요금",
      solution: "TAB-E EMS를 통한 공정별 전력 사용 패턴 분석 및 운영 일정 최적화",
      results: "피크 전력 20% 감소, 연간 전력 비용 약 950만원 절감",
      quote: "TAB-E를 도입한 지 3개월 만에 공정별 전력 소비 패턴을 정확히 파악할 수 있었습니다. 특히 주간 상세 리포트를 통해 낭비되는 에너지를 쉽게 발견하고 개선할 수 있었으며, 알림선 설정으로 피크 관리가 훨씬 용이해졌습니다. 투자 대비 회수 속도가 매우 빨라 만족스럽습니다.",
      savings: "20%",
      contact: "최민석",
      position: "부장, 생산본부",
      benefits: [
        "공정별 전력 소비 패턴 분석",
        "주간 상세 리포트 제공",
        "피크 관리 알림 설정",
        "피크 전력 20% 감소"
      ],
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const timelineRef = useRef<HTMLDivElement>(null)

  const nextSlide = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % caseStudies.length)
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + caseStudies.length) % caseStudies.length)
  }

  useEffect(() => {
    if (timelineRef.current) {
      const activeItem = timelineRef.current.querySelector(".active-timeline-item")
      if (activeItem) {
        activeItem.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        })
      }
    }
  }, [currentIndex])

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      }
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      }
    },
  }

  const currentCase = caseStudies[currentIndex]

  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6 mx-auto max-w-[1400px]">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2 max-w-[900px] mx-auto">
            <Badge variant="outline" className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/20 mx-auto">
              고객 사례
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">실제 고객들의 성공 사례</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed mx-auto">
              TAB-E를 도입한 기업들의 실제 경험과 성과를 확인하세요.
            </p>
          </div>
        </div>

        <div className="relative mb-12 overflow-hidden" ref={timelineRef}>
          <div className="flex justify-center items-center mb-4">
            <Button 
              size="icon" 
              variant="outline" 
              onClick={prevSlide}
              className="rounded-full transition-all hover:bg-primary/10 hover:text-primary mr-2"
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">이전 사례</span>
            </Button>
            <div className="relative flex items-center overflow-x-auto py-4 px-4 no-scrollbar">
              <div className="absolute h-0.5 bg-muted-foreground/20 left-0 right-0 top-1/2 transform -translate-y-1/2"></div>
              {caseStudies.map((caseStudy, index) => (
                <div
                  key={caseStudy.id}
                  className={`flex flex-col items-center mx-4 relative z-10 cursor-pointer ${
                    index === currentIndex ? "active-timeline-item" : ""
                  }`}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1)
                    setCurrentIndex(index)
                  }}
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-all ${
                      index === currentIndex
                        ? "bg-primary text-primary-foreground scale-110"
                        : "bg-primary/10 text-primary hover:bg-primary/20"
                    }`}
                  >
                    <Factory className="h-6 w-6" />
                  </div>
                  <div
                    className={`text-center transition-all ${
                      index === currentIndex ? "font-bold text-primary" : "text-muted-foreground"
                    }`}
                  >
                    <p className="whitespace-nowrap">{caseStudy.company.split(" ")[0]}</p>
                    <p className="text-xs whitespace-nowrap">{caseStudy.savings} 절감</p>
                  </div>
                </div>
              ))}
            </div>
            <Button 
              size="icon" 
              variant="outline" 
              onClick={nextSlide}
              className="rounded-full transition-all hover:bg-primary/10 hover:text-primary ml-2"
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">다음 사례</span>
            </Button>
          </div>
        </div>

        <div className="relative overflow-hidden h-[600px]">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="absolute w-full h-full"
            >
              <div className="grid md:grid-cols-2 gap-8 h-full">
                <div className="bg-primary/5 rounded-2xl p-8 flex flex-col relative overflow-hidden border border-primary/10">
                  <div className="absolute top-0 right-0 w-32 h-32 -mr-10 -mt-10 rounded-full bg-primary/10 opacity-50"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 -ml-8 -mb-8 rounded-full bg-primary/10 opacity-50"></div>

                  <div className="mb-6 relative z-10">
                    <Badge variant="outline" className="bg-background text-primary border-primary/20 mb-2">{currentCase.industry}</Badge>
                    <h3 className="text-2xl font-bold mb-2">{currentCase.company}</h3>
                    <div className="flex items-center">
                      <TrendingUp className="h-5 w-5 text-primary mr-1" />
                      <span className="font-bold text-primary">절감율 {currentCase.savings}</span>
                    </div>
                  </div>

                  <div className="relative z-10 flex-grow">
                    <div className="mb-6">
                      <h4 className="font-medium mb-2">도전 과제</h4>
                      <p className="text-muted-foreground">{currentCase.challenge}</p>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-medium mb-2">솔루션</h4>
                      <p className="text-muted-foreground">{currentCase.solution}</p>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">결과</h4>
                      <p className="text-muted-foreground">{currentCase.results}</p>
                    </div>
                  </div>

                  <div className="mt-auto pt-6 relative z-10">
                    <Button className="w-full" asChild>
                      <a href="#contact">상담 신청하기</a>
                    </Button>
                  </div>
                </div>

                <div className="flex flex-col h-full">
                  <div className="bg-background rounded-2xl p-8 shadow-md mb-8 flex-grow border border-border flex flex-col items-center justify-center text-center">
                    <Quote className="h-16 w-16 text-primary/20 mb-4" />
                    <p className="text-lg text-muted-foreground italic mb-6 max-w-md mx-auto">{currentCase.quote}</p>
                    <div className="mt-4">
                      <p className="font-medium">{currentCase.company}</p>
                      <p className="text-sm text-muted-foreground">
                        {currentCase.contact}
                        {currentCase.position && `, ${currentCase.position}`}
                      </p>
                    </div>
                  </div>

                  <div className="bg-background rounded-2xl p-8 shadow-md border border-border">
                    <h4 className="font-medium mb-4">주요 혜택</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {currentCase.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 flex-shrink-0">
                            <CheckCircle2 className="h-4 w-4 text-primary" />
                          </div>
                          <p className="text-muted-foreground">{benefit}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center mt-8">
          <div className="flex space-x-2">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                className={`h-2.5 rounded-full transition-all ${
                  index === currentIndex ? "bg-primary w-6" : "bg-muted-foreground/30 w-2.5 hover:bg-muted-foreground/50"
                }`}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1)
                  setCurrentIndex(index)
                }}
                aria-label={`사례 ${index + 1}로 이동`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 
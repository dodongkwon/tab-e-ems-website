"use client"

import React, { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const testimonials = [
  {
    company: "대형 제조업체 A",
    industry: "제조",
    challenge: "높은 전력 요금과 비효율적인 에너지 사용으로 인한 비용 증가",
    solution: "TAB-E EMS 도입으로 실시간 모니터링 및 설비 운영 최적화",
    result: "연간 전력 요금 18% 절감, 최대수요 관리로 계약전력 최적화",
    savings: "18%",
    testimonial: "TAB-E를 도입한 후 월 전기요금이 평균 18% 절감되었습니다. 특히 최대수요 관리를 통해 계약전력을 최적화한 것이 큰 도움이 되었습니다.",
    name: "김영호",
    position: "시설관리 팀장"
  },
  {
    company: "물류센터 B",
    industry: "물류",
    challenge: "대형 창고 시설의 냉난방 에너지 과다 사용",
    solution: "에너지 사용 패턴 분석 및 시간대별 운영 최적화",
    result: "냉난방 에너지 25% 절감, 냉동설비 효율성 개선",
    savings: "25%",
    testimonial: "대형 물류창고의 냉방 에너지 비용이 큰 부담이었는데, TAB-E를 통해 사용 패턴을 분석하고 운영을 최적화한 결과 25%의 비용 절감 효과를 얻었습니다.",
    name: "박서연",
    position: "운영 총괄"
  },
  {
    company: "대형 오피스 빌딩 C",
    industry: "부동산",
    challenge: "다수의 임대 공간에 대한 에너지 사용량 모니터링 어려움",
    solution: "층별, 구역별 에너지 사용량 실시간 분석 시스템 구축",
    result: "공용 공간 에너지 사용 20% 절감, 임대 공간 사용량 투명화",
    savings: "20%",
    testimonial: "오피스 빌딩의 다양한 임대 공간에 대한 에너지 사용량을 투명하게 관리할 수 있게 되었습니다. 공용 공간의 에너지 사용량이 20% 감소한 것은 큰 성과입니다.",
    name: "이준호",
    position: "빌딩 관리자"
  }
]

export function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [direction, setDirection] = useState('next')

  const changeSlide = (newIndex, slideDirection) => {
    if (isTransitioning) return;
    
    setDirection(slideDirection);
    setIsTransitioning(true);
    setCurrentIndex(newIndex);
    
    // 애니메이션 종료 후 전환 상태 해제
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % testimonials.length;
    changeSlide(newIndex, 'next');
  }

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    changeSlide(newIndex, 'prev');
  }

  // 자동 슬라이드 설정 (선택 사항)
  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, 8000); // 8초마다 자동 전환
    
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const currentItem = testimonials[currentIndex]

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <Card className="bg-background border-none shadow-lg">
          <CardContent className="px-8 py-12">
            <div className={`grid gap-6 md:grid-cols-[2fr_3fr] md:gap-12 items-center transition-transform duration-500 ease-in-out ${isTransitioning ? (direction === 'next' ? 'animate-slide-left' : 'animate-slide-right') : ''}`}>
              <div className="flex flex-col justify-center space-y-4">
                <Avatar className="h-24 w-24 border-4 border-primary/10">
                  <AvatarFallback className="bg-primary/10 text-primary text-2xl font-semibold">
                    {currentItem.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-bold">{currentItem.name}</h3>
                  <p className="text-muted-foreground">{currentItem.position}</p>
                  <p className="text-primary font-semibold mt-1">{currentItem.company}</p>
                </div>
                <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 w-fit">
                  절감률 {currentItem.savings}
                </Badge>
              </div>
              <div className="space-y-4">
                <blockquote className="text-xl italic relative">
                  <span className="text-4xl text-primary/30 absolute -top-6 -left-4">"</span>
                  {currentItem.testimonial}
                  <span className="text-4xl text-primary/30 absolute -bottom-10 right-0">"</span>
                </blockquote>
                <div className="pt-4">
                  <h4 className="font-semibold">도입 배경</h4>
                  <p className="text-muted-foreground text-sm">{currentItem.challenge}</p>
                </div>
                <div>
                  <h4 className="font-semibold">적용 솔루션</h4>
                  <p className="text-muted-foreground text-sm">{currentItem.solution}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-center mt-6 gap-4">
        <Button 
          size="icon" 
          variant="outline" 
          onClick={prevSlide} 
          disabled={isTransitioning}
          className="rounded-full transition-all hover:bg-primary/10 hover:text-primary"
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">이전 사례</span>
        </Button>
        <div className="flex items-center gap-2">
          {testimonials.map((_, index) => (
            <Button
              key={index}
              variant="ghost"
              size="icon"
              disabled={isTransitioning}
              className={`w-3 h-3 rounded-full p-0 transition-all ${
                index === currentIndex ? "bg-primary scale-110" : "bg-primary/20"
              }`}
              onClick={() => {
                if (index === currentIndex) return;
                changeSlide(index, index > currentIndex ? 'next' : 'prev');
              }}
            >
              <span className="sr-only">사례 {index + 1}</span>
            </Button>
          ))}
        </div>
        <Button 
          size="icon" 
          variant="outline" 
          onClick={nextSlide} 
          disabled={isTransitioning}
          className="rounded-full transition-all hover:bg-primary/10 hover:text-primary"
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">다음 사례</span>
        </Button>
      </div>
    </div>
  )
} 
"use client"

import Image from "next/image"
import { BarChart, Bell, PieChart } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { useEffect, useState } from "react"

export function DemoSection() {
  const dashboardImages = [
    "/dashboard_001.png",
    "/dashboard_002.png",
    "/dashboard_003.png"
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % dashboardImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="demo" className="w-full py-12 md:py-24 lg:py-32 bg-muted relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-muted/20 bg-cover bg-center opacity-10"></div>
      <div className="container px-4 md:px-6 relative z-10 mx-auto max-w-[1400px]">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <Badge variant="outline" className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/20">
              데모
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">TAB-E 미리보기</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              직관적인 인터페이스로 전문가가 아니어도 쉽게 에너지 사용 현황을 파악할 수 있습니다.
            </p>
          </div>
        </div>

        <div className="relative mx-auto max-w-5xl">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/50 rounded-xl blur opacity-30"></div>
          <div className="relative bg-background rounded-xl overflow-hidden border shadow-xl">
            <div className="aspect-video w-full relative" key={`dashboard-slider-${dashboardImages.join('-')}`}>
              {dashboardImages.map((src, index) => (
                <div 
                  key={`${src}-${index}`} 
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentImageIndex ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={src}
                    alt={`TAB-E 대시보드 이미지 ${index + 1}`}
                    width={1920}
                    height={1080}
                    className="object-cover w-full h-full"
                    priority={index === 0}
                    unoptimized={true}
                  />
                </div>
              ))}
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent h-24"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 rounded-full bg-primary/10">
                  <BarChart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold">실시간 모니터링</h3>
              </div>
              <p className="text-muted-foreground">
                15분 단위로 전력 사용량을 모니터링하여 실시간으로 에너지 사용 현황을 파악할 수 있습니다.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 rounded-full bg-primary/10">
                  <Bell className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold">알림 시스템</h3>
              </div>
              <p className="text-muted-foreground">
                설정한 전력량 기준에 도달하면 화면 점멸로 시각적 경고를 제공하여 즉각적인 대응이 가능합니다.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 rounded-full bg-primary/10">
                  <PieChart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold">리포트 생성</h3>
              </div>
              <p className="text-muted-foreground">
                초보자도 이해할 수 있는 직관적인 리포트를 자동으로 생성하여 에너지 사용 패턴을 쉽게 파악할 수
                있습니다.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
} 
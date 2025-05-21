import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CountUp } from "@/components/ui/count-up"
import { DashboardPreview } from "@/components/ui/dashboard-preview"

export function HeroSection() {
  return (
    <section id="hero" className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-background z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-muted/20 bg-cover bg-center opacity-10 z-0"></div>
      <div className="container relative z-10 px-4 md:px-6 mx-auto max-w-[1400px]">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
          <div className="flex flex-col justify-center space-y-4">
            <Badge className="w-fit mx-auto lg:mx-0" variant="outline">
              신제품 출시
            </Badge>
            <div className="space-y-2 text-center lg:text-left">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                <span className="text-primary">TAB-E</span>
              </h1>
              <p className="text-xl text-muted-foreground">중소기업용 無시공형 에너지 관리 솔루션</p>
              <p className="max-w-[600px] text-muted-foreground md:text-xl mx-auto lg:mx-0">
                별도 하드웨어 설치 없이 <span className="font-bold text-primary">평균 10%의 에너지 비용 절감</span>
                과 탄소중립 규제 대응을 지원합니다.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center lg:justify-start">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="#contact">
                  무료 체험 신청 <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#demo">데모 보기</Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <div className="flex flex-col items-center bg-background/80 backdrop-blur-sm p-4 rounded-lg border">
                <div className="text-3xl font-bold text-primary mb-1">
                  <CountUp end={10} suffix="%" />
                </div>
                <p className="text-sm text-center">평균 비용 절감</p>
              </div>
              <div className="flex flex-col items-center bg-background/80 backdrop-blur-sm p-4 rounded-lg border">
                <div className="text-3xl font-bold text-primary mb-1">
                  <CountUp end={0} prefix="₩" suffix="원" />
                </div>
                <p className="text-sm text-center">초기 설치 비용</p>
              </div>
              <div className="flex flex-col items-center bg-background/80 backdrop-blur-sm p-4 rounded-lg border">
                <div className="text-3xl font-bold text-primary mb-1">
                  <CountUp end={2} suffix="개월" staticText="2개월 무료" />
                </div>
                <p className="text-sm text-center">연간 계약 혜택</p>
              </div>
            </div>
          </div>
          <div className="relative mx-auto lg:mx-0 max-w-[600px] w-full">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-primary/50 rounded-xl blur opacity-30"></div>
            <div className="relative bg-background rounded-xl overflow-hidden border shadow-lg">
              <DashboardPreview />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
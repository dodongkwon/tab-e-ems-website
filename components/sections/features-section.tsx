import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart2, Bell, Clock, Download, LineChart, PieChart, Shield, Zap } from "lucide-react"

export function FeaturesSection() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6 mx-auto max-w-[1400px]">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2 max-w-[900px] mx-auto">
            <Badge variant="outline" className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/20 mx-auto">
              주요 기능
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              중소 제조기업을 위한 맞춤형 에너지 관리
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              TAB-E는 중소 제조기업의 에너지 비용 절감과 탄소중립 대응을 위한 핵심 기능을 제공합니다.
            </p>
          </div>
        </div>

        <Tabs defaultValue="all" className="mt-12">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-3 mx-auto">
              <TabsTrigger value="all">전체 기능</TabsTrigger>
              <TabsTrigger value="monitoring">모니터링</TabsTrigger>
              <TabsTrigger value="management">관리</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mx-auto max-w-[1400px]">
              <Card className="overflow-hidden">
                <div className="h-1 bg-primary"></div>
                <CardContent className="p-6">
                  <Download className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">간편한 소프트웨어 솔루션</h3>
                  <p className="text-muted-foreground">별도 하드웨어 설치 없이 기존 PC에서 즉시 사용 가능</p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="h-1 bg-primary"></div>
                <CardContent className="p-6">
                  <Shield className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">안정적인 데이터 관리</h3>
                  <p className="text-muted-foreground">사용자 데이터의 안전한 관리와 백업 시스템 구축</p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="h-1 bg-primary"></div>
                <CardContent className="p-6">
                  <BarChart2 className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">피크 관리 최적화</h3>
                  <p className="text-muted-foreground">전력 피크 발생 패턴 분석 및 알림으로 전력요금 절감 관리</p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="h-1 bg-primary"></div>
                <CardContent className="p-6">
                  <LineChart className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">사용자 친화적 인터페이스</h3>
                  <p className="text-muted-foreground">전문가가 아니어도 쉽게 사용 가능한 대시보드</p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="h-1 bg-primary"></div>
                <CardContent className="p-6">
                  <Zap className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">탄소배출 관리</h3>
                  <p className="text-muted-foreground">전력사용량 기반 탄소배출량 자동 계산 및 보고서 생성</p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="h-1 bg-primary"></div>
                <CardContent className="p-6">
                  <Bell className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">알림선 기능</h3>
                  <p className="text-muted-foreground">
                    사용자가 설정한 전력량 기준에 도달 시 화면 점멸로 시각적 경고
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="h-1 bg-primary"></div>
                <CardContent className="p-6">
                  <Clock className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">요금 관리</h3>
                  <p className="text-muted-foreground">
                    요일 및 시간대별로 전력 요금 추이를 파악해 요금절감 방안 제시
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="h-1 bg-primary"></div>
                <CardContent className="p-6">
                  <PieChart className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">리포트 관리</h3>
                  <p className="text-muted-foreground">
                    초보자도 이해할 수 있는 리포트로 전력 및 탄소배출 관리 최적화
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="monitoring" className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mx-auto max-w-[1200px]">
              <Card className="overflow-hidden">
                <div className="h-1 bg-primary"></div>
                <CardContent className="p-6">
                  <BarChart2 className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">피크 관리 최적화</h3>
                  <p className="text-muted-foreground">전력 피크 발생 패턴 분석 및 알림으로 전력요금 절감 관리</p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="h-1 bg-primary"></div>
                <CardContent className="p-6">
                  <Bell className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">알림선 기능</h3>
                  <p className="text-muted-foreground">
                    사용자가 설정한 전력량 기준에 도달 시 화면 점멸로 시각적 경고
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="h-1 bg-primary"></div>
                <CardContent className="p-6">
                  <LineChart className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">15분 단위 전력 사용 패턴</h3>
                  <p className="text-muted-foreground">상세한 시간대별 전력 사용량 모니터링으로 낭비 요소 파악</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="management" className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mx-auto max-w-[1200px]">
              <Card className="overflow-hidden">
                <div className="h-1 bg-primary"></div>
                <CardContent className="p-6">
                  <Zap className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">탄소배출 관리</h3>
                  <p className="text-muted-foreground">전력사용량 기반 탄소배출량 자동 계산 및 보고서 생성</p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="h-1 bg-primary"></div>
                <CardContent className="p-6">
                  <Clock className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">요금 관리</h3>
                  <p className="text-muted-foreground">
                    요일 및 시간대별로 전력 요금 추이를 파악해 요금절감 방안 제시
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="h-1 bg-primary"></div>
                <CardContent className="p-6">
                  <PieChart className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">리포트 관리</h3>
                  <p className="text-muted-foreground">
                    초보자도 이해할 수 있는 리포트로 전력 및 탄소배출 관리 최적화
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
} 
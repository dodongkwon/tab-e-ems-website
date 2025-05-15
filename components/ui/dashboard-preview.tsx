"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function DashboardPreview() {
  const [activeTab, setActiveTab] = useState("실시간 모니터링")
  
  // 자동 탭 전환 효과
  useEffect(() => {
    const tabs = ["실시간 모니터링", "피크 관리", "리포트"]
    let currentIndex = 0
    
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % tabs.length
      setActiveTab(tabs[currentIndex])
    }, 5000)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="p-1">
      <div className="bg-muted p-2 flex items-center justify-between rounded-t-md border-b">
        <div className="flex gap-1">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-xs text-muted-foreground">TAB-E 대시보드</div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 h-10 rounded-none border-b">
          <TabsTrigger value="실시간 모니터링">실시간 모니터링</TabsTrigger>
          <TabsTrigger value="피크 관리">피크 관리</TabsTrigger>
          <TabsTrigger value="리포트">리포트</TabsTrigger>
        </TabsList>
        <TabsContent value="실시간 모니터링" className="mt-4">
          <div className="relative aspect-[16/10] w-full bg-muted/70 rounded-md overflow-hidden">
            {/* 이미지 대신 SVG 그래프 사용 */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full p-4">
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div className="bg-background/80 rounded-lg p-3">
                    <div className="text-xs text-muted-foreground mb-2">실시간 전력 사용량</div>
                    <div className="h-24 flex items-end gap-1">
                      {[40, 65, 35, 50, 45, 60, 75].map((h, i) => (
                        <div 
                          key={i} 
                          className="flex-1 bg-primary/80 rounded-t"
                          style={{ height: `${h}%` }}
                        ></div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-background/80 rounded-lg p-3">
                    <div className="text-xs text-muted-foreground mb-2">에너지 사용 분포</div>
                    <div className="h-24 flex items-center justify-center">
                      <div className="relative w-20 h-20 rounded-full overflow-hidden">
                        <div className="absolute w-full h-full bg-blue-500" style={{ clipPath: 'polygon(50% 50%, 0 0, 100% 0, 100% 100%, 50% 50%)' }}></div>
                        <div className="absolute w-full h-full bg-green-500" style={{ clipPath: 'polygon(50% 50%, 100% 100%, 0 100%, 0 50%, 50% 50%)' }}></div>
                        <div className="absolute w-full h-full bg-yellow-500" style={{ clipPath: 'polygon(50% 50%, 0 50%, 0 0, 50% 0, 50% 50%)' }}></div>
                        <div className="absolute inset-[25%] bg-background rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-background/80 rounded-lg p-3">
                  <div className="text-xs text-muted-foreground mb-2">월간 전력 소비 추이</div>
                  <div className="h-16 flex items-end gap-1">
                    {[30, 45, 60, 40, 55, 70, 50, 65, 35, 55, 45, 60].map((h, i) => (
                      <div 
                        key={i} 
                        className="flex-1 bg-primary/80 rounded-t"
                        style={{ height: `${h}%` }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="피크 관리" className="mt-4">
          <div className="relative aspect-[16/10] w-full bg-muted/70 rounded-md overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full p-4">
                <div className="bg-background/80 rounded-lg p-3 mb-3">
                  <div className="text-xs text-muted-foreground mb-2">일일 피크 전력</div>
                  <div className="h-32 relative">
                    <div className="absolute top-0 left-0 right-0 h-[1px] border-t border-dashed border-red-500"></div>
                    <div className="absolute top-0 right-0 bg-red-500/20 text-[10px] text-red-500 px-1">최대 계약 전력</div>
                    <div className="h-full flex items-end gap-1">
                      {[60, 75, 85, 70, 80, 90, 65, 70, 85, 75, 60, 50].map((h, i) => (
                        <div 
                          key={i} 
                          className={`flex-1 rounded-t ${h > 80 ? 'bg-red-500' : 'bg-primary/80'}`}
                          style={{ height: `${h}%` }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-background/80 rounded-lg p-3">
                    <div className="text-xs text-muted-foreground">현재 전력</div>
                    <div className="text-lg font-medium mt-1">78<span className="text-xs ml-1">kW</span></div>
                  </div>
                  <div className="bg-background/80 rounded-lg p-3">
                    <div className="text-xs text-muted-foreground">일일 피크</div>
                    <div className="text-lg font-medium mt-1">95<span className="text-xs ml-1">kW</span></div>
                  </div>
                  <div className="bg-background/80 rounded-lg p-3">
                    <div className="text-xs text-muted-foreground">계약 전력</div>
                    <div className="text-lg font-medium mt-1">100<span className="text-xs ml-1">kW</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="리포트" className="mt-4">
          <div className="relative aspect-[16/10] w-full bg-muted/70 rounded-md overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full p-4">
                <div className="bg-background/80 rounded-lg p-3 mb-3">
                  <div className="text-xs text-muted-foreground mb-2">월별 에너지 사용 비교</div>
                  <div className="flex h-24 items-end gap-3">
                    <div className="flex-1 flex flex-col items-center">
                      <div className="text-[10px] mb-1">이전</div>
                      <div className="w-full bg-muted-foreground/30 rounded-t h-[80%]"></div>
                    </div>
                    <div className="flex-1 flex flex-col items-center">
                      <div className="text-[10px] mb-1">현재</div>
                      <div className="w-full bg-primary/80 rounded-t h-[65%]"></div>
                    </div>
                    <div className="flex-1 flex flex-col items-center">
                      <div className="text-[10px] mb-1">절감량</div>
                      <div className="w-full bg-green-500/80 rounded-t h-[15%]"></div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-background/80 rounded-lg p-3">
                    <div className="text-xs text-muted-foreground">월 절감액</div>
                    <div className="text-lg font-medium mt-1">15.2<span className="text-xs ml-1">만원</span></div>
                  </div>
                  <div className="bg-background/80 rounded-lg p-3">
                    <div className="text-xs text-muted-foreground">절감율</div>
                    <div className="text-lg font-medium text-green-500 mt-1">10<span className="text-xs ml-1">%</span></div>
                  </div>
                  <div className="bg-background/80 rounded-lg p-3">
                    <div className="text-xs text-muted-foreground">CO2 감소</div>
                    <div className="text-lg font-medium mt-1">0.8<span className="text-xs ml-1">톤</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
} 
"use client"

import { useState } from "react"
import { Play, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function VideoGuideSection() {
  const [videoLoaded, setVideoLoaded] = useState(false)

  // Featured video data - replace with your actual YouTube video ID
  const featuredVideo = {
    id: "pKVQyxjvpHQ", // TAB-E 시스템 소개 영상
    title: "TAB-E 시스템 필수 가이드",
    description:
      "TAB-E 에너지 관리 시스템의 주요 기능과 효과적인 활용 방법을 알아보세요. 이 영상은 시스템 설치부터 데이터 분석, 에너지 절감 방법까지 TAB-E의 모든 것을 담고 있습니다.",
    category: "사용 가이드",
  }

  return (
    <section id="video-guide" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted flex justify-center">
      <div className="container max-w-5xl px-4 md:px-6 flex flex-col items-center">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 w-full">
          <div className="space-y-2">
            <Badge variant="outline" className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/20">
              비디오 가이드
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">TAB-E 필수 가이드 영상</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              TAB-E 시스템의 필수 가이드 영상으로 쉽게 배워보세요.
            </p>
          </div>
        </div>

        <div className="w-full mx-auto flex flex-col items-center">
          <div className="relative w-full max-w-4xl">
            {/* Video thumbnail overlay (shows before video loads) */}
            <div
              className={`absolute inset-0 z-10 flex items-center justify-center transition-opacity duration-500 ${
                videoLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
              }`}
              style={{
                backgroundImage: `url(https://img.youtube.com/vi/${featuredVideo.id}/maxresdefault.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="relative z-20 flex flex-col items-center">
                <div
                  className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center mb-4 cursor-pointer hover:bg-primary transition-colors duration-300"
                  onClick={() => setVideoLoaded(true)}
                >
                  <Play className="h-10 w-10 text-white" fill="white" />
                </div>
                <p className="text-white font-medium text-xl max-w-md text-center px-4">{featuredVideo.title}</p>
              </div>
            </div>

            {/* Video container with aspect ratio */}
            <div className="relative aspect-video w-full overflow-hidden rounded-xl shadow-xl border border-border/50">
              <iframe
                src={`https://www.youtube.com/embed/${featuredVideo.id}?rel=0&autoplay=${videoLoaded ? 1 : 0}`}
                title={featuredVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
            </div>
          </div>

          <div className="mt-8 bg-card border rounded-xl p-6 shadow-sm text-center w-full max-w-4xl">
            <div className="flex flex-col items-center gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Play className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-2">
                <div className="flex flex-col items-center gap-2">
                  <h3 className="text-xl font-bold">{featuredVideo.title}</h3>
                  <Badge variant="secondary">
                    {featuredVideo.category}
                  </Badge>
                </div>
                <p className="text-muted-foreground max-w-2xl">{featuredVideo.description}</p>
                <div className="pt-4">
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={`https://www.youtube.com/watch?v=${featuredVideo.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center"
                    >
                      YouTube에서 보기 <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center w-full max-w-4xl">
            <p className="text-muted-foreground mb-4">더 많은 TAB-E 사용 가이드 영상이 필요하신가요?</p>
            <Button asChild>
              <a href="https://www.youtube.com/channel/YOUR_CHANNEL_ID" target="_blank" rel="noopener noreferrer">
                YouTube 채널 방문하기 <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
} 
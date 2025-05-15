"use client"

import { Badge } from "@/components/ui/badge"
import { TestimonialSlider } from "@/components/ui/testimonial-slider"

export function CasesSection() {
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

        <div className="max-w-5xl mx-auto">
          <TestimonialSlider />
        </div>
      </div>
    </section>
  )
} 
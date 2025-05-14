import Link from "next/link"
import { Button } from "@/components/ui/button"

const faqs = [
  {
    question: "TAB-E EMS는 어떤 기업에 적합한가요?",
    answer: "전력 사용량이 많은 모든 기업에 적합합니다. 특히 제조업, 물류, 유통, 병원, 대형 오피스 등 에너지 비용이 운영 비용의 상당 부분을 차지하는 기업에 큰 효과가 있습니다."
  },
  {
    question: "KEPCO API 연동은 어떻게 이루어지나요?",
    answer: "회원가입 시 한전 사이트에서 API 식별자를 발급받아 입력하시면 됩니다. 자세한 연동 방법은 회원가입 페이지에서 확인하실 수 있으며, 필요시 기술 지원을 제공해 드립니다."
  },
  {
    question: "서비스 도입 시 어떤 하드웨어가 필요한가요?",
    answer: "별도의 하드웨어 없이 웹 기반으로 서비스를 제공합니다. 다만, 보다 정밀한 에너지 관리를 위해 선택적으로 IoT 센서를 연동할 수 있습니다. (옵션 사항)"
  },
  {
    question: "데이터 보안은 어떻게 보장되나요?",
    answer: "모든 데이터는 암호화되어 저장되며, SSL 통신을 통해 전송됩니다. 또한 ISO 27001 인증을 받은 클라우드 서비스를 이용하여 높은 수준의 보안을 유지하고 있습니다."
  },
  {
    question: "서비스 계약 기간은 어떻게 되나요?",
    answer: "기본적으로 월 단위 구독형 서비스로 제공되며, 연간 계약 시 할인 혜택이 있습니다. Enterprise 요금제의 경우 맞춤형 계약이 가능합니다."
  },
  {
    question: "도입 효과를 어떻게 확인할 수 있나요?",
    answer: "대시보드를 통해 에너지 사용 현황과 절감 효과를 실시간으로 확인할 수 있으며, 월간/분기별 리포트를 통해 상세한 분석 결과를 제공합니다."
  }
]

export function FaqSection() {
  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            자주 묻는 질문
          </h2>
          <p className="text-lg text-muted-foreground">
            TAB-E EMS 도입을 고려하시는 분들이 자주 물어보시는 질문들입니다.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
              <p className="text-muted-foreground">{faq.answer}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <p className="mb-6 text-lg">더 궁금한 점이 있으신가요?</p>
          <Button size="lg" asChild>
            <Link href="/support">
              고객지원 페이지로 이동
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
} 
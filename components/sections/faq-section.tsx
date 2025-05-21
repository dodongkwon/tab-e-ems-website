import Link from "next/link"
import { Button } from "@/components/ui/button"

const faqs = [
  {
    question: "TAB-E는 어떻게 설치 하나요?",
    answer: "웹사이트에서 회원가입 후 영업담당자가 전화 상담을 진행합니다. 이후 설치 파일 다운로드 권한이 부여되며, 사업장 내 PC 약 10분 정도의 설치 과정을 거쳐 즉시 사용 가능합니다."
  },
  {
    question: "실제로 얼마나 에너지를 절감할 수 있나요?",
    answer: "TAB-E 도입 기업은 평균적으로 연간 8-10%의 에너지 비용을 절감하고 있습니다."
  },
  {
    question: "서비스 도입 시 어떤 하드웨어가 필요한가요?",
    answer: "별도의 하드웨어 없이 웹 기반으로 서비스를 제공합니다. 다만, 보다 정밀한 에너지 관리를 위해 선택적으로 IoT 센서를 연동할 수 있습니다. (옵션 사항)"
  },
  {
    question: "어떤 종류의 데이터를 수집하고 분석하요?",
    answer: "한국전력 계정을 통한 전력 사용량 데이터, 15분 단위 전력 사용 패턴, 피크 발생 시점 및 패턴, 일일 전력 사용량 조회를 통한 낭비 구간 확인, 전력 사용량 기반 탄소배출량 등을 수집하고 분석합니다."
  },
  {
    question: "서비스 계약 기간은 어떻게 되나요?",
    answer: "기본적으로 월 단위 구독형 서비스로 제공되며, 연간 계약 시 할인 혜택이 있습니다."
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
            궁금한 점이 있으신가요?
          </h2>
          <p className="text-lg text-muted-foreground">
            TAB-E 도입을 고려하시는 분들이 자주 물어보시는 질문들입니다.
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
      </div>
    </section>
  )
} 
"use client"

import Link from "next/link"
import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../ui/dialog"

export function Footer() {
  const [termsOpen, setTermsOpen] = useState(false)
  const [privacyOpen, setPrivacyOpen] = useState(false)

  return (
    <footer className="bg-muted py-12">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">DITAB</h3>
            <p className="text-sm text-muted-foreground">
              에너지 사용량 분석 및 효율화를 지원하는 솔루션
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-4">정보</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => setTermsOpen(true)} 
                  className="hover:text-primary cursor-pointer"
                >
                  이용약관
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setPrivacyOpen(true)} 
                  className="hover:text-primary cursor-pointer"
                >
                  개인정보처리방침
                </button>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary">회사소개</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">회사 정보</h4>
            <address className="not-italic text-sm text-muted-foreground">
              <p>대표: 도현우</p>
              <p>사업자등록 번호: 478-81-03214</p>
              <p>법인등록번호: 230111-0408376</p>
              <p>주소: 울산광역시 남구 테크노산업로55번길 79-10, A동 403호</p>
              <p>이메일: do@di-tab.com</p>
            </address>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} TAB-E. All rights reserved.</p>
        </div>
      </div>

      {/* 이용약관 모달 */}
      <Dialog open={termsOpen} onOpenChange={setTermsOpen}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">이용약관</DialogTitle>
            <DialogDescription>
              시행일자: 2025년 5월 15일
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 text-sm mt-4">
            <h2 className="text-lg font-bold mb-3">TAB-E 서비스 이용약관</h2>

            <h3 className="text-lg font-medium mb-2">제 1조 (목적 및 정의)</h3>
            <p className="mb-3">
              1. 본 약관은 주식회사 DITAB(이하 "회사")이 제공하는 TAB-E 서비스(이하 "서비스")의 이용 조건을 규정합니다.<br />
              2. "서비스"란 회사가 제공하는 에너지 관리 솔루션을 의미합니다.<br />
              3. "회원"이란 본 약관에 동의하고 서비스를 이용하는 자를 말합니다.
            </p>

            <h3 className="text-lg font-medium mb-2">제 2조 (약관의 효력 및 변경)</h3>
            <p className="mb-3">
              1. 회사는 필요시 약관을 변경할 수 있으며, 중요 변경사항은 7일 전에 공지합니다.<br />
              2. 변경된 약관 발효 후에도 서비스를 계속 이용할 경우 변경에 동의한 것으로 간주됩니다.
            </p>

            <h3 className="text-lg font-medium mb-2">제 3조 (서비스 내용)</h3>
            <p className="mb-3">
              회사는 다음 서비스를 제공합니다:<br />
              - 에너지 사용량 모니터링 및 분석<br />
              - 전력 피크 관리<br />
              - 탄소배출량 계산 및 보고서 생성
            </p>

            <h3 className="text-lg font-medium mb-2">제 4조 (서비스 이용료 및 결제)</h3>
            <p className="mb-3">
              1. 서비스 요금제:<br />
              - 베이직: 월 7만원 또는 연 70만원(17% 할인)<br />
              - 프로: 월 15만원 또는 연 150만원(17% 할인)<br />
              - 프리미엄: 월 25만원 또는 연 250만원(17% 할인)<br />
              2. 요금은 선불제를 원칙으로 하며, 변경 시 30일 전에 공지합니다.
            </p>

            <h3 className="text-lg font-medium mb-2">제 5조 (환불 정책)</h3>
            <p className="mb-3">
              1. 월간 구독: 결제일로부터 7일 이내 해지 시 전액 환불, 이후 환불 불가<br />
              2. 연간 구독:<br />
              - 결제일로부터 14일 이내 해지 시 전액 환불<br />
              - 14일 이후: 사용기간 차감 후 잔액의 80% 환불<br />
              3. 회사 귀책사유로 서비스 이용 불가 시 해당 기간 전액 환불
            </p>

            <h3 className="text-lg font-medium mb-2">제 6조 (회원의 의무)</h3>
            <p className="mb-3">
              1. 회원은 계정정보를 안전하게 관리해야 합니다.<br />
              2. 회원은 서비스 이용을 위해 정확한 전기사용량 데이터 접근 정보를 제공해야 합니다.<br />
              3. 다음 행위는 금지됩니다:<br />
              - 허위정보 제공<br />
              - 타인 정보 도용<br />
              - 서비스 운영 방해
            </p>

            <h3 className="text-lg font-medium mb-2">제 7조 (데이터 관리)</h3>
            <p className="mb-3">
              1. 에너지 사용 데이터의 소유권은 회원에게 있습니다.<br />
              2. 회원 탈퇴 시 데이터를 CSV/PDF로 내보낼 수 있으며, 탈퇴 3개월 후 삭제됩니다.<br />
              3. 회사는 식별 불가능한 통계 데이터를 서비스 개선 목적으로 활용할 수 있습니다.
            </p>

            <h3 className="text-lg font-medium mb-2">제 8조 (서비스 이용 제한)</h3>
            <p className="mb-3">
              회사는 다음 경우 서비스 이용을 제한할 수 있습니다:<br />
              1. 시스템 점검, 장애, 천재지변 발생 시<br />
              2. 회원이 약관을 위반한 경우
            </p>

            <h3 className="text-lg font-medium mb-2">제 9조 (면책조항)</h3>
            <p className="mb-3">
              1. 회사는 불가항력적 사유로 서비스 제공이 불가능한 경우 책임이 면제됩니다.<br />
              2. 회원 귀책사유로 인한 서비스 장애에 대해 책임지지 않습니다.<br />
              3. KEPCO 시스템 장애로 인한 서비스 제한에 대해 책임지지 않습니다.
            </p>

            <h3 className="text-lg font-medium mb-2">제 10조 (서비스 업데이트 및 종료)</h3>
            <p className="mb-3">
              1. 회사는 서비스 품질 향상을 위해 기능을 변경할 수 있으며, 중요 변경은 30일 전에 공지합니다.<br />
              2. 서비스 종료 시 3개월 전에 공지하며, 회원은 데이터를 백업할 수 있습니다.<br />
              3. 서비스 종료 시 잔여 이용료는 환불 정책에 따라 환불됩니다.
            </p>

            <h3 className="text-lg font-medium mb-2">제 11조 (분쟁해결)</h3>
            <p className="mb-3">
              1. 회사와 회원은 분쟁 발생 시 원만한 해결을 위해 노력합니다.<br />
              2. 분쟁 해결이 어려울 경우 관할법원에 소를 제기할 수 있습니다.
            </p>

            <p className="mt-6 text-xs text-muted-foreground">본 약관은 2025년 5월 15일부터 시행됩니다.</p>
          </div>
        </DialogContent>
      </Dialog>

      {/* 개인정보처리방침 모달 */}
      <Dialog open={privacyOpen} onOpenChange={setPrivacyOpen}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">개인정보처리방침</DialogTitle>
            <DialogDescription>
              시행일자: 2025년 5월 15일
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 text-sm mt-4">
            <h2 className="text-lg font-bold mb-3">개인정보 처리방침</h2>
                                
            <p className="mb-4">
              주식회사 DITAB(이하 '회사')은 관련 법령에 따라 이용자의 개인정보를 보호하기 위해 다음과 같이 개인정보 처리방침을 수립하여 공개합니다.
            </p>

            <h3 className="text-lg font-medium mb-2">제 1조 (개인정보 수집 목적)</h3>
            <p className="mb-3">
              회사는 다음 목적으로 개인정보를 수집합니다:<br />
              1. 서비스 제공: 에너지 모니터링, 피크 관리, 탄소배출량 계산, 요금 결제<br />
              2. 회원 관리: 본인확인, 부정이용 방지, 민원처리, 고지사항 전달<br />
              3. 마케팅: 신규 서비스 안내, 이용 통계 분석<br />
              4. 서비스 개선: 기존 서비스 개선 및 신규 서비스 개발
            </p>

            <h3 className="text-lg font-medium mb-2">제 2조 (수집하는 개인정보 항목)</h3>
            <p className="mb-3">
              1. 필수항목: 회사명, 담당자 이름, 연락처, 이메일, ID, 비밀번호, KEPCO 계정 정보, 결제 정보<br />
              2. 선택항목: 부서명, 직위, 팩스번호, 프로필 이미지<br />
              3. 자동 생성 정보: IP주소, 쿠키, 방문기록, 에너지 사용 데이터
            </p>

            <h3 className="text-lg font-medium mb-2">제 3조 (보유 및 이용기간)</h3>
            <p className="mb-3">
              1. 회원 정보: 회원 탈퇴 시까지<br />
              2. 에너지 사용 데이터: 서비스 종료 후 3개월까지<br />
              3. 관련 법령에 따른 보존:<br />
              - 계약 관련 기록: 5년<br />
              - 대금결제 기록: 5년<br />
              - 소비자 불만처리 기록: 3년<br />
              - 접속 기록: 3개월
            </p>

            <h3 className="text-lg font-medium mb-2">제 4조 (개인정보 제3자 제공)</h3>
            <p className="mb-3">
              회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만, 이용자의 사전 동의 또는 법령의 규정에 의한 경우는 예외로 합니다.
            </p>

            <h3 className="text-lg font-medium mb-2">제 5조 (개인정보 처리 위탁)</h3>
            <p className="mb-3">
              회사는 서비스 제공을 위해 다음과 같이 개인정보 처리 업무를 위탁합니다:<br />
              - 결제처리: [PG사]<br />
              - 고객상담: [PG사]<br />
              - 시스템 운영: [DITAB]
            </p>

            <h3 className="text-lg font-medium mb-2">제 6조 (정보주체의 권리)</h3>
            <p className="mb-3">
              이용자는 언제든지 개인정보 열람, 정정, 삭제, 처리정지 요구 등의 권리를 행사할 수 있습니다. 요청은 서면, 이메일, FAX를 통해 가능합니다.
            </p>

            <h3 className="text-lg font-medium mb-2">제 7조 (개인정보 안전성 확보)</h3>
            <p className="mb-3">
              회사는 개인정보 보호를 위해 다음과 같은 조치를 취합니다:<br />
              1. 관리적 조치: 내부관리계획 수립·시행, 직원 교육<br />
              2. 기술적 조치: 접근권한 관리, 암호화, 보안프로그램 설치<br />
              3. 물리적 조치: 전산실 및 자료보관실 접근통제
            </p>

            <h3 className="text-lg font-medium mb-2">제 8조 (쿠키 사용)</h3>
            <p className="mb-3">
              회사는 서비스 제공을 위해 쿠키를 사용합니다. 이용자는 브라우저 설정을 통해 쿠키 저장을 거부할 수 있으나, 일부 서비스 이용이 제한될 수 있습니다.
            </p>

            <h3 className="text-lg font-medium mb-2">제 9조 (개인정보 보호책임자)</h3>
            <p className="mb-3">
              개인정보 보호책임자:<br />
              - 성명: [도현우]<br />
              - 직책: [대표이사]<br />
              - 연락처: [010-4088-0419], [do@di-tab.com]
            </p>

            <h3 className="text-lg font-medium mb-2">제 10조 (권익침해 구제방법)</h3>
            <p className="mb-3">
              개인정보 침해 관련 상담은 다음 기관에 문의할 수 있습니다:<br />
              - 개인정보침해신고센터: (국번없이) 118<br />
              - 개인정보분쟁조정위원회: 1833-6972<br />
              - 대검찰청 사이버수사과: (국번없이) 1301<br />
              - 경찰청 사이버안전국: (국번없이) 182
            </p>

            <p className="mt-6 text-xs text-muted-foreground">본 개인정보 처리방침은 2025년 5월 15일부터 적용됩니다.</p>
          </div>
        </DialogContent>
      </Dialog>
    </footer>
  )
} 
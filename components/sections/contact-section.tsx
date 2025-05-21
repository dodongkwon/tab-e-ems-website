import { Button } from "@/components/ui/button"

export function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-accent/5">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* 왼쪽 섹션 - 정보 및 프로세스 */}
          <div className="space-y-8">
            <div>
              <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                문의하기
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                TAB-E에 대해 더 알고 싶으신가요?
              </h2>
              <p className="text-muted-foreground">
                무료 체험 신청 또는 문의사항이 있으시면 연락주세요. 담당자가 빠르게 답변드립니다.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div>
                  <div className="font-medium">이메일 문의</div>
                  <div className="text-lg">contact@di-tab.com</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div>
                  <div className="font-medium">주소</div>
                  <div>울산광역시 남구 테크노산업로55번길 79-10 A동 403호</div>
                </div>
              </div>
            </div>

            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">설치 과정</h3>
              <ol className="space-y-3 pl-5 list-decimal">
                <li>서비스에 대한 문의 요청</li>
                <li>웹사이트에서 회원가입</li>
                <li>영업 담당자 전화 상담 진행</li>
                <li>설치 파일 다운로드 및 설치</li>
                <li>소프트웨어 설치 및 초기 셋업</li>
                <li>서비스 이용 시작</li>
              </ol>
            </div>
          </div>

          {/* 오른쪽 섹션 - 문의 양식 */}
          <div className="bg-white p-8 rounded-lg shadow-sm border">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  이름
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="홍길동"
                  className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-primary/50 focus:border-primary"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-1">
                  회사명
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="(주)홍길동"
                  className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-primary/50 focus:border-primary"
                />
              </div>
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                이메일
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="hong@example.com"
                className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-primary/50 focus:border-primary"
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="phone" className="block text-sm font-medium mb-1">
                연락처
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="010-1234-5678"
                className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-primary/50 focus:border-primary"
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="interest" className="block text-sm font-medium mb-1">
                관심 요금제
              </label>
              <select
                id="interest"
                name="interest"
                className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-primary/50 focus:border-primary"
              >
                <option value="">선택해주세요</option>
                <option value="basic">베이직 (7만원/월)</option>
                <option value="professional">프로 (15만원/월)</option>
                <option value="enterprise">프리미엄 (25만원/월)</option>
              </select>
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                문의내용
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="문의하실 내용을 입력해주세요."
                className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-primary/50 focus:border-primary"
              ></textarea>
            </div>
            
            <Button type="submit" className="w-full">
              문의하기
            </Button>
            
            <p className="text-xs text-center text-muted-foreground mt-4">
              제출 시 <span className="text-primary underline cursor-pointer">개인정보처리방침</span>에 동의하게 됩니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 
import { Button } from "@/components/ui/button"

export function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-accent/50">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            도입 문의
          </h2>
          <p className="text-lg text-muted-foreground">
            TAB-E EMS 도입에 관심이 있으신가요? 문의를 남겨주시면 빠르게 연락드리겠습니다.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="company" className="block text-sm font-medium">
                    회사명 <span className="text-primary">*</span>
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-primary/50 focus:border-primary"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium">
                    담당자명 <span className="text-primary">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-primary/50 focus:border-primary"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">
                    이메일 <span className="text-primary">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-primary/50 focus:border-primary"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium">
                    연락처 <span className="text-primary">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-primary/50 focus:border-primary"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="interest" className="block text-sm font-medium">
                  관심 서비스
                </label>
                <select
                  id="interest"
                  name="interest"
                  className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-primary/50 focus:border-primary"
                >
                  <option value="">선택해주세요</option>
                  <option value="basic">Basic</option>
                  <option value="professional">Professional</option>
                  <option value="enterprise">Enterprise</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium">
                  문의사항
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-primary/50 focus:border-primary"
                ></textarea>
              </div>
              
              <div>
                <Button type="submit" className="w-full">
                  문의하기
                </Button>
              </div>
            </form>
          </div>
          
          <div className="bg-card p-8 rounded-xl border space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">전화 문의</h3>
              <p className="text-2xl font-bold">02-1234-5678</p>
              <p className="text-sm text-muted-foreground">평일 09:00 - 18:00 (공휴일 제외)</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">이메일 문의</h3>
              <p className="text-lg">contact@tabe-ems.com</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">본사 위치</h3>
              <address className="not-italic text-muted-foreground">
                <p>서울특별시 강남구 테헤란로 123</p>
                <p>TAB-E EMS 빌딩 8층</p>
              </address>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
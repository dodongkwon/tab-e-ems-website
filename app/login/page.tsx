"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Eye, EyeOff, ChevronRight, Check, AlertCircle, ExternalLink, ArrowLeft, ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"
import { useToast } from "@/hooks/use-toast"
import { ILoginData, ILoginErrors, ISignupData, ISignupErrors } from "@/types"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export default function LoginPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [showPassword, setShowPassword] = useState(false)
  const [activeTab, setActiveTab] = useState("login")
  
  // 로그인 관련 상태
  const [loginData, setLoginData] = useState<ILoginData>({
    userId: "",
    password: "",
    rememberMe: false,
  })
  const [loginErrors, setLoginErrors] = useState<ILoginErrors>({})

  // 회원가입 관련 상태
  const [signupStep, setSignupStep] = useState<number>(1)
  const [signupProgress, setSignupProgress] = useState<number>(33)
  const [signupData, setSignupData] = useState<ISignupData>({
    termsAgreed: false,
    privacyAgreed: false,
    kepcoAgreed: false,
    companyName: "",
    managerName: "",
    phone: "",
    email: "",
    userId: "",
    password: "",
    confirmPassword: "",
    kepcoId: "",
  })
  const [signupErrors, setSignupErrors] = useState<ISignupErrors>({})
  const [userIdAvailable, setUserIdAvailable] = useState<boolean | null>(null)

  // 로그인 입력 필드 변경 처리
  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setLoginData({ ...loginData, [name]: value })

    // 에러 메시지 제거
    if (loginErrors[name as keyof ILoginErrors]) {
      setLoginErrors({ ...loginErrors, [name]: "" })
    }
  }

  // 로그인 체크박스 변경 처리
  const handleLoginCheckboxChange = (checked: boolean) => {
    setLoginData({ ...loginData, rememberMe: checked })
  }

  // 로그인 폼 유효성 검사
  const validateLoginForm = () => {
    const newErrors: ILoginErrors = {}

    if (!loginData.userId.trim()) {
      newErrors.userId = "사용자 ID를 입력해주세요."
    }

    if (!loginData.password.trim()) {
      newErrors.password = "비밀번호를 입력해주세요."
    }

    setLoginErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // 로그인 처리
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateLoginForm()) {
      // 실제 구현에서는 여기서 API 호출하여 로그인 처리
      // 예시: loginUser(loginData)

      // 로그인 성공 시 토스트 메시지 표시
      toast({
        title: "로그인 성공",
        description: "TAB-E 대시보드로 이동합니다.",
        variant: "default",
      })

      // 대시보드 페이지가 구현되면 해당 경로로 변경
      router.push("/")
    }
  }
  
  // 회원가입 관련 함수들
  
  // 전화번호 자동 포맷팅
  const formatPhoneNumber = (value: string) => {
    const numbers = value.replace(/\D/g, "")
    if (numbers.length <= 3) {
      return numbers
    } else if (numbers.length <= 7) {
      return `${numbers.slice(0, 3)}-${numbers.slice(3)}`
    } else {
      return `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(7, 11)}`
    }
  }

  // 회원가입 입력 필드 변경 처리
  const handleSignupChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target

    if (name === "phone") {
      setSignupData({ ...signupData, [name]: formatPhoneNumber(value) })
    } else if (name === "userId" && value.trim() !== "") {
      setSignupData({ ...signupData, [name]: value })
      setUserIdAvailable(null) // 사용자 ID 변경 시 중복 체크 상태 초기화
    } else {
      setSignupData({ ...signupData, [name]: value })
    }

    // 에러 메시지 제거
    if (signupErrors[name as keyof ISignupErrors]) {
      setSignupErrors({ ...signupErrors, [name]: "" })
    }
  }

  // 회원가입 체크박스 변경 처리
  const handleSignupCheckboxChange = (name: string, checked: boolean) => {
    setSignupData({ ...signupData, [name]: checked })
    if (signupErrors[name as keyof ISignupErrors]) {
      setSignupErrors({ ...signupErrors, [name]: "" })
    }
  }

  // 사용자 ID 중복 체크
  const checkUserIdAvailability = () => {
    if (!signupData.userId.trim()) {
      setSignupErrors({ ...signupErrors, userId: "사용자 ID를 입력해주세요." })
      return
    }

    // 실제 구현에서는 API 호출로 대체 (프론트엔드 구현이므로 모의 구현)
    setTimeout(() => {
      // 예시: 'admin', 'test'는 이미 사용 중인 ID로 가정
      const isAvailable = !["admin", "test"].includes(signupData.userId.toLowerCase())
      setUserIdAvailable(isAvailable)

      if (!isAvailable) {
        setSignupErrors({ ...signupErrors, userId: "이미 사용 중인 ID입니다." })
      } else {
        toast({
          title: "사용 가능한 ID입니다.",
          description: "입력하신 ID는 사용 가능합니다.",
          variant: "default",
        })
      }
    }, 500)
  }

  // 1단계 유효성 검사 (약관 동의)
  const validateSignupStep1 = () => {
    const newErrors: ISignupErrors = {}

    if (!signupData.termsAgreed) {
      newErrors.termsAgreed = "이용약관에 동의해주세요."
    }

    if (!signupData.privacyAgreed) {
      newErrors.privacyAgreed = "개인정보 처리방침에 동의해주세요."
    }

    if (!signupData.kepcoAgreed) {
      newErrors.kepcoAgreed = "한전 데이터 제공 동의를 완료해주세요."
    }

    setSignupErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // 2단계 유효성 검사 (정보 입력)
  const validateSignupStep2 = () => {
    const newErrors: ISignupErrors = {}
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

    if (!signupData.companyName.trim()) {
      newErrors.companyName = "회사명을 입력해주세요."
    }

    if (!signupData.managerName.trim()) {
      newErrors.managerName = "담당자 이름을 입력해주세요."
    }

    if (!signupData.phone.trim()) {
      newErrors.phone = "연락처를 입력해주세요."
    } else if (signupData.phone.replace(/\D/g, "").length !== 11) {
      newErrors.phone = "올바른 연락처 형식이 아닙니다."
    }

    if (!signupData.email.trim()) {
      newErrors.email = "이메일 주소를 입력해주세요."
    } else if (!emailRegex.test(signupData.email)) {
      newErrors.email = "올바른 이메일 형식이 아닙니다."
    }

    if (!signupData.userId.trim()) {
      newErrors.userId = "사용자 ID를 입력해주세요."
    } else if (userIdAvailable === null) {
      newErrors.userId = "ID 중복 확인을 해주세요."
    } else if (userIdAvailable === false) {
      newErrors.userId = "이미 사용 중인 ID입니다."
    }

    if (!signupData.password.trim()) {
      newErrors.password = "비밀번호를 입력해주세요."
    } else if (!passwordRegex.test(signupData.password)) {
      newErrors.password = "비밀번호는 8자 이상, 대소문자, 숫자, 특수문자를 포함해야 합니다."
    }

    if (!signupData.confirmPassword.trim()) {
      newErrors.confirmPassword = "비밀번호 확인을 입력해주세요."
    } else if (signupData.password !== signupData.confirmPassword) {
      newErrors.confirmPassword = "비밀번호가 일치하지 않습니다."
    }

    if (!signupData.kepcoId.trim()) {
      newErrors.kepcoId = "KEPCO API 고유 식별자를 입력해주세요."
    }

    setSignupErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // 다음 단계로 이동
  const handleNextStep = () => {
    if (signupStep === 1 && validateSignupStep1()) {
      setSignupStep(2)
      setSignupProgress(66)
    } else if (signupStep === 2 && validateSignupStep2()) {
      setSignupStep(3)
      setSignupProgress(100)
      // 실제 구현에서는 여기서 API 호출하여 회원가입 처리
      // 예시: submitSignupForm(formData)
    }
  }

  // 이전 단계로 이동
  const handlePrevStep = () => {
    if (signupStep > 1) {
      setSignupStep(signupStep - 1)
      setSignupProgress(signupStep === 3 ? 66 : 33)
    }
  }

  // 회원가입 완료 후 홈으로 이동
  const handleGoHome = () => {
    router.push("/")
  }

  // 탭 변경 처리
  const handleTabChange = (value: string) => {
    setActiveTab(value)
    // 회원가입 탭으로 변경되면 1단계부터 시작
    if (value === "signup") {
      setSignupStep(1)
      setSignupProgress(33)
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* 헤더 컴포넌트 */}
      <Header />
      
      <main className="flex-1 overflow-auto py-10">
        <div className="w-full px-4 md:px-6 mt-16">
          <div className={`mx-auto ${activeTab === "signup" ? "max-w-3xl" : "max-w-md"}`}>
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                {activeTab === "login" ? "로그인" : "회원가입"}
              </h1>
              <p className="mt-4 text-muted-foreground">
                {activeTab === "login" 
                  ? "TAB-E 서비스를 이용하기 위해 로그인해주세요." 
                  : "TAB-E 서비스 이용을 위한 회원가입을 진행합니다."}
              </p>
            </div>

            <Tabs defaultValue="login" value={activeTab} onValueChange={handleTabChange} className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="login">로그인</TabsTrigger>
                <TabsTrigger value="signup">회원가입</TabsTrigger>
              </TabsList>
              
              {/* 로그인 탭 컨텐츠 */}
              <TabsContent value="login">
                <Card className="mb-16">
                  <form onSubmit={handleLogin}>
                    <CardHeader>
                      <CardTitle>로그인</CardTitle>
                      <CardDescription>TAB-E 서비스 이용을 위한 계정 정보를 입력해주세요.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {/* 사용자 ID 입력 필드 */}
                      <div className="space-y-2">
                        <Label htmlFor="userId" className={loginErrors.userId ? "text-destructive" : ""}>
                          사용자 ID
                        </Label>
                        <Input
                          id="userId"
                          name="userId"
                          value={loginData.userId}
                          onChange={handleLoginChange}
                          placeholder="사용자 ID 입력"
                          className={loginErrors.userId ? "border-destructive" : ""}
                        />
                        {loginErrors.userId && <p className="text-xs text-destructive">{loginErrors.userId}</p>}
                      </div>
                      
                      {/* 비밀번호 입력 필드 */}
                      <div className="space-y-2">
                        <Label htmlFor="password" className={loginErrors.password ? "text-destructive" : ""}>
                          비밀번호
                        </Label>
                        <div className="relative">
                          <Input
                            id="password"
                            name="password"
                            type={showPassword ? "text" : "password"}
                            value={loginData.password}
                            onChange={handleLoginChange}
                            placeholder="비밀번호 입력"
                            className={loginErrors.password ? "border-destructive pr-10" : "pr-10"}
                          />
                          <button
                            type="button"
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                            <span className="sr-only">{showPassword ? "비밀번호 숨기기" : "비밀번호 보기"}</span>
                          </button>
                        </div>
                        {loginErrors.password && <p className="text-xs text-destructive">{loginErrors.password}</p>}
                      </div>
                      
                      {/* 로그인 상태 유지 및 비밀번호 찾기 */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="rememberMe"
                            checked={loginData.rememberMe}
                            onCheckedChange={handleLoginCheckboxChange}
                          />
                          <Label htmlFor="rememberMe" className="text-sm">
                            로그인 상태 유지
                          </Label>
                        </div>
                        <Link href="/forgot-password" className="text-sm text-primary hover:underline">
                          비밀번호 찾기
                        </Link>
                      </div>
                    </CardContent>
                    <CardFooter className="flex flex-col gap-4">
                      <Button type="submit" className="w-full">
                        로그인
                      </Button>
                      <div className="text-center text-sm">
                        계정이 없으신가요?{" "}
                        <Button 
                          variant="link" 
                          className="p-0 h-auto text-primary" 
                          onClick={() => setActiveTab("signup")}
                        >
                          회원가입
                        </Button>
                      </div>
                    </CardFooter>
                  </form>
                </Card>
              </TabsContent>
              
              {/* 회원가입 탭 컨텐츠 */}
              <TabsContent value="signup">
                {/* 진행 상태 표시 */}
                <div className="mb-8">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">진행 상태</span>
                    <span className="text-sm font-medium">{signupStep}/3 단계</span>
                  </div>
                  <Progress value={signupProgress} className="h-2" />
                  <div className="flex justify-between mt-2">
                    <span className={`text-xs ${signupStep >= 1 ? "text-primary font-medium" : "text-muted-foreground"}`}>
                      약관 동의
                    </span>
                    <span className={`text-xs ${signupStep >= 2 ? "text-primary font-medium" : "text-muted-foreground"}`}>
                      정보 입력
                    </span>
                    <span className={`text-xs ${signupStep >= 3 ? "text-primary font-medium" : "text-muted-foreground"}`}>
                      가입 완료
                    </span>
                  </div>
                </div>

                {/* 1단계: 약관 동의 */}
                {signupStep === 1 && (
                  <Card className="w-full mb-16">
                    <CardHeader className="pb-4">
                      <CardTitle>약관 및 동의</CardTitle>
                      <CardDescription>
                        서비스 이용을 위해 아래 약관에 동의해주세요. 모든 항목에 동의해야 다음 단계로 진행할 수 있습니다.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-5">
                      <div className="space-y-4">
                        <div className="border rounded-lg">
                          <Tabs defaultValue="terms">
                            <TabsList className="w-full grid grid-cols-2">
                              <TabsTrigger value="terms">이용약관</TabsTrigger>
                              <TabsTrigger value="privacy">개인정보 처리방침</TabsTrigger>
                            </TabsList>
                            <TabsContent value="terms" className="p-4">
                              <div className="h-96 overflow-y-auto text-sm">
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
                            </TabsContent>
                            <TabsContent value="privacy" className="p-4">
                              <div className="h-96 overflow-y-auto text-sm">
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
                            </TabsContent>
                          </Tabs>
                        </div>

                        <div className="flex items-start space-x-2">
                          <Checkbox
                            id="termsAgreed"
                            checked={signupData.termsAgreed}
                            onCheckedChange={(checked) => handleSignupCheckboxChange("termsAgreed", checked as boolean)}
                          />
                          <div className="grid gap-1.5 leading-none">
                            <Label
                              htmlFor="termsAgreed"
                              className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
                                signupErrors.termsAgreed ? "text-destructive" : ""
                              }`}
                            >
                              이용약관에 동의합니다. (필수)
                            </Label>
                            {signupErrors.termsAgreed && <p className="text-xs text-destructive">{signupErrors.termsAgreed}</p>}
                          </div>
                        </div>

                        <div className="flex items-start space-x-2">
                          <Checkbox
                            id="privacyAgreed"
                            checked={signupData.privacyAgreed}
                            onCheckedChange={(checked) => handleSignupCheckboxChange("privacyAgreed", checked as boolean)}
                          />
                          <div className="grid gap-1.5 leading-none">
                            <Label
                              htmlFor="privacyAgreed"
                              className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
                                signupErrors.privacyAgreed ? "text-destructive" : ""
                              }`}
                            >
                              개인정보 처리방침에 동의합니다. (필수)
                            </Label>
                            {signupErrors.privacyAgreed && <p className="text-xs text-destructive">{signupErrors.privacyAgreed}</p>}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4 border-t pt-4">
                        <h3 className="text-lg font-medium">한국전력공사(KEPCO) 데이터 제공 동의</h3>
                        <Alert>
                          <AlertCircle className="h-4 w-4" />
                          <AlertTitle>중요 안내</AlertTitle>
                          <AlertDescription>
                            TAB-E 서비스 이용을 위해서는 한국전력공사(KEPCO) 웹사이트에서 데이터 제공 동의가 필요합니다.
                          </AlertDescription>
                        </Alert>

                        <div className="bg-slate-50 p-5 rounded-lg space-y-4">
                          <h4 className="font-medium text-sm">한전 데이터 제공 동의 절차</h4>
                          <ol className="list-decimal pl-5 text-sm space-y-2">
                            <li>
                              <Link href="https://www.kepco.co.kr" target="_blank" className="text-primary hover:underline inline-flex items-center">
                                한국전력공사 웹사이트<ExternalLink className="h-3 w-3 ml-1" />
                              </Link>
                              에 접속하여 로그인합니다.
                            </li>
                            <li>'제3자 정보제공 동의' 항목에서 'TAB-E 서비스'를 찾아 동의 체크박스를 선택합니다.</li>
                            <li>동의 완료 후 발급되는 'API 고유 식별자'를 복사하여 다음 단계에서 입력해주세요.</li>
                          </ol>
                          
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => window.open('https://www.kepco.co.kr', '_blank')}
                            className="mt-2"
                          >
                            한전 웹사이트로 이동 <ExternalLink className="h-4 w-4 ml-1" />
                          </Button>
                        </div>

                        <div className="flex items-start space-x-2 mt-4">
                          <Checkbox
                            id="kepcoAgreed"
                            checked={signupData.kepcoAgreed}
                            onCheckedChange={(checked) => handleSignupCheckboxChange("kepcoAgreed", checked as boolean)}
                          />
                          <div className="grid gap-1.5 leading-none">
                            <Label
                              htmlFor="kepcoAgreed"
                              className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
                                signupErrors.kepcoAgreed ? "text-destructive" : ""
                              }`}
                            >
                              한전 데이터 제공 동의를 완료했습니다. (필수)
                            </Label>
                            {signupErrors.kepcoAgreed && <p className="text-xs text-destructive">{signupErrors.kepcoAgreed}</p>}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between pt-4">
                      <Button variant="outline" onClick={() => setActiveTab("login")}>
                        <ArrowLeft className="mr-2 h-4 w-4" /> 취소
                      </Button>
                      <Button onClick={handleNextStep}>
                        다음 <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                )}

                {/* 2단계: 사용자 정보 입력 */}
                {signupStep === 2 && (
                  <Card className="w-full mb-16">
                    <CardHeader className="pb-4">
                      <CardTitle>사용자 정보 입력</CardTitle>
                      <CardDescription>
                        TAB-E 서비스 이용을 위한 정보를 입력해주세요. 모든 필드는 필수 입력사항입니다.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <Label htmlFor="companyName" className={signupErrors.companyName ? "text-destructive" : ""}>
                            회사명
                          </Label>
                          <Input
                            id="companyName"
                            name="companyName"
                            value={signupData.companyName}
                            onChange={handleSignupChange}
                            placeholder="회사이름"
                            className={signupErrors.companyName ? "border-destructive" : ""}
                          />
                          {signupErrors.companyName && <p className="text-xs text-destructive">{signupErrors.companyName}</p>}
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="managerName" className={signupErrors.managerName ? "text-destructive" : ""}>
                            담당자 이름
                          </Label>
                          <Input
                            id="managerName"
                            name="managerName"
                            value={signupData.managerName}
                            onChange={handleSignupChange}
                            placeholder="이름"
                            className={signupErrors.managerName ? "border-destructive" : ""}
                          />
                          {signupErrors.managerName && <p className="text-xs text-destructive">{signupErrors.managerName}</p>}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <Label htmlFor="phone" className={signupErrors.phone ? "text-destructive" : ""}>
                            연락처
                          </Label>
                          <Input
                            id="phone"
                            name="phone"
                            value={signupData.phone}
                            onChange={handleSignupChange}
                            placeholder="010-1234-5678"
                            className={signupErrors.phone ? "border-destructive" : ""}
                          />
                          {signupErrors.phone && <p className="text-xs text-destructive">{signupErrors.phone}</p>}
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="email" className={signupErrors.email ? "text-destructive" : ""}>
                            이메일 주소
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={signupData.email}
                            onChange={handleSignupChange}
                            placeholder="ditab@naver.com"
                            className={signupErrors.email ? "border-destructive" : ""}
                          />
                          {signupErrors.email && <p className="text-xs text-destructive">{signupErrors.email}</p>}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="userId" className={signupErrors.userId ? "text-destructive" : ""}>
                          사용자 ID
                        </Label>
                        <div className="flex gap-2">
                          <Input
                            id="userId"
                            name="userId"
                            value={signupData.userId}
                            onChange={handleSignupChange}
                            placeholder="영문, 숫자 조합 6-20자"
                            className={signupErrors.userId ? "border-destructive" : ""}
                          />
                          <Button type="button" variant="outline" onClick={checkUserIdAvailability}>
                            중복 확인
                          </Button>
                        </div>
                        {userIdAvailable === true && (
                          <p className="text-xs text-green-600 flex items-center">
                            <Check className="h-3 w-3 mr-1" /> 사용 가능한 ID입니다.
                          </p>
                        )}
                        {signupErrors.userId && <p className="text-xs text-destructive">{signupErrors.userId}</p>}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <Label htmlFor="password" className={signupErrors.password ? "text-destructive" : ""}>
                            비밀번호
                          </Label>
                          <Input
                            id="password"
                            name="password"
                            type="password"
                            value={signupData.password}
                            onChange={handleSignupChange}
                            placeholder="비밀번호 입력"
                            className={signupErrors.password ? "border-destructive" : ""}
                          />
                          <p className="text-xs text-muted-foreground">
                            8자 이상, 대소문자, 숫자, 특수문자를 포함
                          </p>
                          {signupErrors.password && <p className="text-xs text-destructive">{signupErrors.password}</p>}
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="confirmPassword" className={signupErrors.confirmPassword ? "text-destructive" : ""}>
                            비밀번호 확인
                          </Label>
                          <Input
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                            value={signupData.confirmPassword}
                            onChange={handleSignupChange}
                            placeholder="비밀번호 재입력"
                            className={signupErrors.confirmPassword ? "border-destructive" : ""}
                          />
                          {signupErrors.confirmPassword && <p className="text-xs text-destructive">{signupErrors.confirmPassword}</p>}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="kepcoId" className={signupErrors.kepcoId ? "text-destructive" : ""}>
                          KEPCO API 고유 식별자
                        </Label>
                        <Input
                          id="kepcoId"
                          name="kepcoId"
                          value={signupData.kepcoId}
                          onChange={handleSignupChange}
                          placeholder="한전 데이터 제공 동의 시 발급된 ID"
                          className={signupErrors.kepcoId ? "border-destructive" : ""}
                        />
                        {signupErrors.kepcoId && <p className="text-xs text-destructive">{signupErrors.kepcoId}</p>}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between pt-4">
                      <Button variant="outline" onClick={handlePrevStep}>
                        <ArrowLeft className="mr-2 h-4 w-4" /> 이전
                      </Button>
                      <Button onClick={handleNextStep}>
                        다음 <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                )}

                {/* 3단계: 회원가입 완료 */}
                {signupStep === 3 && (
                  <Card className="w-full mb-16">
                    <CardHeader className="pb-4">
                      <CardTitle>회원가입 완료</CardTitle>
                      <CardDescription>TAB-E 서비스 회원가입이 성공적으로 완료되었습니다.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-5">
                      <div className="flex flex-col items-center justify-center py-6">
                        <div className="rounded-full bg-primary/10 p-3 mb-4">
                          <Check className="h-8 w-8 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">환영합니다!</h3>
                        <p className="text-center text-muted-foreground mb-4">
                          {signupData.companyName}의 {signupData.managerName}님, TAB-E 서비스 회원가입이 완료되었습니다.
                          <br />
                          입력하신 이메일({signupData.email})로 가입 확인 메일이 발송되었습니다.
                        </p>
                      </div>

                      <div className="bg-muted p-4 rounded-lg">
                        <h4 className="font-medium mb-2">다음 단계</h4>
                        <ol className="space-y-2 list-decimal pl-5 text-sm">
                          <li>이메일에 포함된 링크를 클릭하여 계정을 활성화해주세요.</li>
                          <li>로그인 후 대시보드에서 TAB-E 서비스를 시작할 수 있습니다.</li>
                          <li>서비스 이용 중 문의사항이 있으시면 고객센터(052-123-4567)로 연락해주세요.</li>
                        </ol>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-center pt-4">
                      <Button onClick={handleGoHome}>
                        홈으로 이동 <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>

      {/* 푸터 컴포넌트 */}
      <Footer />
    </div>
  )
} 
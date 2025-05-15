"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ChevronRight, Check, AlertCircle, ExternalLink, ArrowLeft, ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"
import { useToast } from "@/hooks/use-toast"
import { ISignupData, ISignupErrors } from "@/types"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export default function SignupPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [step, setStep] = useState<number>(1)
  const [progress, setProgress] = useState<number>(33)
  const [formData, setFormData] = useState<ISignupData>({
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
  const [errors, setErrors] = useState<ISignupErrors>({})
  const [userIdAvailable, setUserIdAvailable] = useState<boolean | null>(null)

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

  // 입력 필드 변경 처리
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target

    if (name === "phone") {
      setFormData({ ...formData, [name]: formatPhoneNumber(value) })
    } else if (name === "userId" && value.trim() !== "") {
      setFormData({ ...formData, [name]: value })
      setUserIdAvailable(null) // 사용자 ID 변경 시 중복 체크 상태 초기화
    } else {
      setFormData({ ...formData, [name]: value })
    }

    // 에러 메시지 제거
    if (errors[name as keyof ISignupErrors]) {
      setErrors({ ...errors, [name]: "" })
    }
  }

  // 체크박스 변경 처리
  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData({ ...formData, [name]: checked })
    if (errors[name as keyof ISignupErrors]) {
      setErrors({ ...errors, [name]: "" })
    }
  }

  // 사용자 ID 중복 체크
  const checkUserIdAvailability = () => {
    if (!formData.userId.trim()) {
      setErrors({ ...errors, userId: "사용자 ID를 입력해주세요." })
      return
    }

    // 실제 구현에서는 API 호출로 대체 (프론트엔드 구현이므로 모의 구현)
    setTimeout(() => {
      // 예시: 'admin', 'test'는 이미 사용 중인 ID로 가정
      const isAvailable = !["admin", "test"].includes(formData.userId.toLowerCase())
      setUserIdAvailable(isAvailable)

      if (!isAvailable) {
        setErrors({ ...errors, userId: "이미 사용 중인 ID입니다." })
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
  const validateStep1 = () => {
    const newErrors: ISignupErrors = {}

    if (!formData.termsAgreed) {
      newErrors.termsAgreed = "이용약관에 동의해주세요."
    }

    if (!formData.privacyAgreed) {
      newErrors.privacyAgreed = "개인정보 처리방침에 동의해주세요."
    }

    if (!formData.kepcoAgreed) {
      newErrors.kepcoAgreed = "한전 데이터 제공 동의를 완료해주세요."
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // 2단계 유효성 검사 (정보 입력)
  const validateStep2 = () => {
    const newErrors: ISignupErrors = {}
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

    if (!formData.companyName.trim()) {
      newErrors.companyName = "회사명을 입력해주세요."
    }

    if (!formData.managerName.trim()) {
      newErrors.managerName = "담당자 이름을 입력해주세요."
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "연락처를 입력해주세요."
    } else if (formData.phone.replace(/\D/g, "").length !== 11) {
      newErrors.phone = "올바른 연락처 형식이 아닙니다."
    }

    if (!formData.email.trim()) {
      newErrors.email = "이메일 주소를 입력해주세요."
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "올바른 이메일 형식이 아닙니다."
    }

    if (!formData.userId.trim()) {
      newErrors.userId = "사용자 ID를 입력해주세요."
    } else if (userIdAvailable === null) {
      newErrors.userId = "ID 중복 확인을 해주세요."
    } else if (userIdAvailable === false) {
      newErrors.userId = "이미 사용 중인 ID입니다."
    }

    if (!formData.password.trim()) {
      newErrors.password = "비밀번호를 입력해주세요."
    } else if (!passwordRegex.test(formData.password)) {
      newErrors.password = "비밀번호는 8자 이상, 대소문자, 숫자, 특수문자를 포함해야 합니다."
    }

    if (!formData.confirmPassword.trim()) {
      newErrors.confirmPassword = "비밀번호 확인을 입력해주세요."
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "비밀번호가 일치하지 않습니다."
    }

    if (!formData.kepcoId.trim()) {
      newErrors.kepcoId = "KEPCO API 고유 식별자를 입력해주세요."
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // 다음 단계로 이동
  const handleNextStep = () => {
    if (step === 1 && validateStep1()) {
      setStep(2)
      setProgress(66)
    } else if (step === 2 && validateStep2()) {
      setStep(3)
      setProgress(100)
      // 실제 구현에서는 여기서 API 호출하여 회원가입 처리
      // 예시: submitSignupForm(formData)
    }
  }

  // 이전 단계로 이동
  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1)
      setProgress(step === 3 ? 66 : 33)
    }
  }

  // 회원가입 완료 후 홈으로 이동
  const handleGoHome = () => {
    router.push("/")
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* 헤더 컴포넌트 */}
      <Header />
      
      <main className="flex-1 flex items-center justify-center">
        <div className="w-full px-4 md:px-6 py-8">
          <div className="mx-auto max-w-2xl">
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">회원가입</h1>
              <p className="mt-4 text-muted-foreground">TAB-E 서비스 이용을 위한 회원가입을 진행합니다.</p>
            </div>

            {/* 진행 상태 표시 */}
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">진행 상태</span>
                <span className="text-sm font-medium">{step}/3 단계</span>
              </div>
              <Progress value={progress} className="h-2" />
              <div className="flex justify-between mt-2">
                <span className={`text-xs ${step >= 1 ? "text-primary font-medium" : "text-muted-foreground"}`}>
                  약관 동의
                </span>
                <span className={`text-xs ${step >= 2 ? "text-primary font-medium" : "text-muted-foreground"}`}>
                  정보 입력
                </span>
                <span className={`text-xs ${step >= 3 ? "text-primary font-medium" : "text-muted-foreground"}`}>
                  가입 완료
                </span>
              </div>
            </div>

            {/* 1단계: 약관 동의 */}
            {step === 1 && (
              <Card>
                <CardHeader>
                  <CardTitle>약관 및 동의</CardTitle>
                  <CardDescription>
                    서비스 이용을 위해 아래 약관에 동의해주세요. 모든 항목에 동의해야 다음 단계로 진행할 수 있습니다.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="border rounded-lg">
                      <Tabs defaultValue="terms">
                        <TabsList className="w-full grid grid-cols-2">
                          <TabsTrigger value="terms">이용약관</TabsTrigger>
                          <TabsTrigger value="privacy">개인정보 처리방침</TabsTrigger>
                        </TabsList>
                        <TabsContent value="terms" className="p-4">
                          <div className="h-64 overflow-y-auto text-sm">
                            <h3 className="text-lg font-medium mb-2">제1조 (목적)</h3>
                            <p className="mb-2">
                              이 약관은 ㈜디탭(이하 "회사")이 제공하는 TAB-E EMS 서비스(이하 "서비스")의 이용과 관련하여 회사와 이용자의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
                            </p>

                            <h3 className="text-lg font-medium mb-2">제2조 (용어의 정의)</h3>
                            <p className="mb-2">
                              본 약관에서 사용하는 용어의 정의는 다음과 같습니다:<br />
                              1. "서비스"란 회사가 제공하는 에너지 관리 시스템 서비스를 의미합니다.<br />
                              2. "이용자"란 본 약관에 따라 서비스를 이용하는 기업 및 개인을 의미합니다.<br />
                              3. "계정"이란 서비스 이용을 위해 필요한 회원 인증 정보를 의미합니다.
                            </p>

                            <h3 className="text-lg font-medium mb-2">제3조 (약관의 효력 및 변경)</h3>
                            <p className="mb-2">
                              1. 본 약관은 서비스 화면에 게시하거나 기타 방법으로 이용자에게 공지함으로써 효력이 발생합니다.<br />
                              2. 회사는 필요한 경우 본 약관을 변경할 수 있으며, 변경된 약관은 서비스 내 공지사항을 통해 공지합니다.<br />
                              3. 이용자가 변경된 약관에 동의하지 않을 경우 서비스 이용을 중단할 수 있습니다.
                            </p>

                            <h3 className="text-lg font-medium mb-2">제4조 (서비스의 제공 및 변경)</h3>
                            <p className="mb-2">
                              1. 회사는 에너지 사용량 분석 및 효율화를 위한 다양한 서비스를 제공합니다.<br />
                              2. 회사는 서비스의 품질 향상 및 기술적 필요에 따라 서비스 내용을 변경할 수 있습니다.<br />
                              3. 서비스 변경 시 회사는 이용자에게 사전 공지합니다.
                            </p>
                          </div>
                        </TabsContent>
                        <TabsContent value="privacy" className="p-4">
                          <div className="h-64 overflow-y-auto text-sm">
                            <p className="font-medium mb-4">
                              ㈜디탭(이하 '회사')은 이용자의 개인정보를 중요시하며, 「개인정보 보호법」등 관련 법령을 준수하고 있습니다. 
                              회사는 개인정보처리방침을 통해 수집하는 개인정보의 항목, 수집 및 이용목적, 보유 및 파기 등에 관한 사항을 안내 드립니다.
                            </p>

                            <h3 className="text-lg font-medium mb-2">1. 수집하는 개인정보 항목</h3>
                            <p className="mb-4">
                              회사는 서비스 제공을 위해 다음의 개인정보를 수집하고 있습니다.<br /><br />
                              
                              <strong>필수항목</strong><br />
                              - 회원 정보: 이름, 이메일 주소, 비밀번호, 연락처<br />
                              - 기업 정보: 기업명, 사업자등록번호, 담당자 정보<br />
                              - 서비스 이용 정보: 접속 로그, IP 주소, 쿠키, 서비스 이용 기록<br /><br />
                              
                              <strong>선택항목</strong><br />
                              - 에너지 사용 데이터, 설비 정보
                            </p>

                            <h3 className="text-lg font-medium mb-2">2. 개인정보 수집 및 이용 목적</h3>
                            <p className="mb-4">
                              - 서비스 제공 및 계약 이행: 서비스 제공, 청구서 발송, 구매 및 요금 결제<br />
                              - 회원 관리: 회원제 서비스 이용, 개인식별, 불량회원 관리<br />
                              - 마케팅 및 광고: 이벤트 정보 및 참여기회 제공, 서비스 안내
                            </p>

                            <h3 className="text-lg font-medium mb-2">3. 개인정보의 보유 및 이용기간</h3>
                            <p className="mb-4">
                              회사는 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 단, 관계법령에 의해 보존할 필요가 있는 경우 법령에서 정한 기간 동안 보관합니다.
                            </p>
                          </div>
                        </TabsContent>
                      </Tabs>
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="termsAgreed"
                        checked={formData.termsAgreed}
                        onCheckedChange={(checked) => handleCheckboxChange("termsAgreed", checked as boolean)}
                      />
                      <div className="grid gap-1.5 leading-none">
                        <Label
                          htmlFor="termsAgreed"
                          className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
                            errors.termsAgreed ? "text-destructive" : ""
                          }`}
                        >
                          이용약관에 동의합니다. (필수)
                        </Label>
                        {errors.termsAgreed && <p className="text-xs text-destructive">{errors.termsAgreed}</p>}
                      </div>
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="privacyAgreed"
                        checked={formData.privacyAgreed}
                        onCheckedChange={(checked) => handleCheckboxChange("privacyAgreed", checked as boolean)}
                      />
                      <div className="grid gap-1.5 leading-none">
                        <Label
                          htmlFor="privacyAgreed"
                          className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
                            errors.privacyAgreed ? "text-destructive" : ""
                          }`}
                        >
                          개인정보 처리방침에 동의합니다. (필수)
                        </Label>
                        {errors.privacyAgreed && <p className="text-xs text-destructive">{errors.privacyAgreed}</p>}
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

                    <div className="bg-muted p-4 rounded-lg text-sm">
                      <p className="mb-4">
                        아래 절차에 따라 KEPCO 데이터 제공 동의를 완료해주세요:
                      </p>
                      <ol className="space-y-2 list-decimal pl-5">
                        <li>한국전력공사 웹사이트에 접속합니다.</li>
                        <li>전력 데이터 제공 동의 페이지로 이동합니다.</li>
                        <li>인증 후 TAB-E 서비스에 데이터 제공 동의를 완료합니다.</li>
                        <li>발급된 고유 식별자를 회원가입 시 입력합니다.</li>
                      </ol>
                      <div className="mt-4">
                        <Button variant="outline" size="sm" className="text-xs" asChild>
                          <Link href="https://www.kepco.co.kr" target="_blank" rel="noopener noreferrer">
                            KEPCO 웹사이트 바로가기 <ExternalLink className="ml-1 h-3 w-3" />
                          </Link>
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="kepcoAgreed"
                        checked={formData.kepcoAgreed}
                        onCheckedChange={(checked) => handleCheckboxChange("kepcoAgreed", checked as boolean)}
                      />
                      <div className="grid gap-1.5 leading-none">
                        <Label
                          htmlFor="kepcoAgreed"
                          className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
                            errors.kepcoAgreed ? "text-destructive" : ""
                          }`}
                        >
                          KEPCO 데이터 제공 동의를 완료했습니다. (필수)
                        </Label>
                        {errors.kepcoAgreed && <p className="text-xs text-destructive">{errors.kepcoAgreed}</p>}
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" onClick={() => router.push("/login")}>
                    <ArrowLeft className="mr-2 h-4 w-4" /> 취소
                  </Button>
                  <Button onClick={handleNextStep}>
                    다음 <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            )}

            {/* 2단계: 사용자 정보 입력 */}
            {step === 2 && (
              <Card>
                <CardHeader>
                  <CardTitle>사용자 정보 입력</CardTitle>
                  <CardDescription>
                    TAB-E 서비스 이용을 위한 정보를 입력해주세요. 모든 필드는 필수 입력사항입니다.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="companyName" className={errors.companyName ? "text-destructive" : ""}>
                        회사명
                      </Label>
                      <Input
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="(주)홍길동"
                        className={errors.companyName ? "border-destructive" : ""}
                      />
                      {errors.companyName && <p className="text-xs text-destructive">{errors.companyName}</p>}
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="managerName" className={errors.managerName ? "text-destructive" : ""}>
                        담당자 이름
                      </Label>
                      <Input
                        id="managerName"
                        name="managerName"
                        value={formData.managerName}
                        onChange={handleChange}
                        placeholder="홍길동"
                        className={errors.managerName ? "border-destructive" : ""}
                      />
                      {errors.managerName && <p className="text-xs text-destructive">{errors.managerName}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className={errors.phone ? "text-destructive" : ""}>
                        연락처
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="010-1234-5678"
                        className={errors.phone ? "border-destructive" : ""}
                      />
                      {errors.phone && <p className="text-xs text-destructive">{errors.phone}</p>}
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email" className={errors.email ? "text-destructive" : ""}>
                        이메일 주소
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="example@company.com"
                        className={errors.email ? "border-destructive" : ""}
                      />
                      {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="userId" className={errors.userId ? "text-destructive" : ""}>
                      사용자 ID
                    </Label>
                    <div className="flex gap-2">
                      <Input
                        id="userId"
                        name="userId"
                        value={formData.userId}
                        onChange={handleChange}
                        placeholder="영문, 숫자 조합 6-20자"
                        className={errors.userId ? "border-destructive" : ""}
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
                    {errors.userId && <p className="text-xs text-destructive">{errors.userId}</p>}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="password" className={errors.password ? "text-destructive" : ""}>
                        비밀번호
                      </Label>
                      <Input
                        id="password"
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="비밀번호 입력"
                        className={errors.password ? "border-destructive" : ""}
                      />
                      <p className="text-xs text-muted-foreground">
                        8자 이상, 대소문자, 숫자, 특수문자 포함
                      </p>
                      {errors.password && <p className="text-xs text-destructive">{errors.password}</p>}
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword" className={errors.confirmPassword ? "text-destructive" : ""}>
                        비밀번호 확인
                      </Label>
                      <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="비밀번호 재입력"
                        className={errors.confirmPassword ? "border-destructive" : ""}
                      />
                      {errors.confirmPassword && <p className="text-xs text-destructive">{errors.confirmPassword}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="kepcoId" className={errors.kepcoId ? "text-destructive" : ""}>
                      KEPCO API 고유 식별자
                    </Label>
                    <Input
                      id="kepcoId"
                      name="kepcoId"
                      value={formData.kepcoId}
                      onChange={handleChange}
                      placeholder="한전 데이터 제공 동의 시 발급된 ID"
                      className={errors.kepcoId ? "border-destructive" : ""}
                    />
                    {errors.kepcoId && <p className="text-xs text-destructive">{errors.kepcoId}</p>}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
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
            {step === 3 && (
              <Card>
                <CardHeader>
                  <CardTitle>회원가입 완료</CardTitle>
                  <CardDescription>TAB-E 서비스 회원가입이 성공적으로 완료되었습니다.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex flex-col items-center justify-center py-6">
                    <div className="rounded-full bg-primary/10 p-3 mb-4">
                      <Check className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">환영합니다!</h3>
                    <p className="text-center text-muted-foreground mb-4">
                      {formData.companyName}의 {formData.managerName}님, TAB-E 서비스 회원가입이 완료되었습니다.
                      <br />
                      입력하신 이메일({formData.email})로 가입 확인 메일이 발송되었습니다.
                    </p>
                  </div>

                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-medium mb-2">다음 단계</h4>
                    <ol className="space-y-2 list-decimal pl-5 text-sm">
                      <li>가입하신 이메일로 설치 파일과 매뉴얼을 보내드립니다.</li>
                      <li>로그인 후 대시보드에서 TAB-E 서비스를 시작할 수 있습니다.</li>
                      <li>서비스 이용 중 문의사항이 있으시면 고객센터(052-267-0419)로 연락해주세요.</li>
                    </ol>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <Button onClick={handleGoHome}>
                    홈으로 이동 <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            )}
          </div>
        </div>
      </main>

      {/* 푸터 컴포넌트 */}
      <Footer />
    </div>
  )
} 
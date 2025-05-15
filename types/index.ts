export interface ILoginData {
  userId: string;
  password: string;
  rememberMe: boolean;
}

export interface ILoginErrors {
  userId?: string;
  password?: string;
}

export interface ISignupData {
  termsAgreed: boolean;
  privacyAgreed: boolean;
  kepcoAgreed: boolean;
  companyName: string;
  managerName: string;
  phone: string;
  email: string;
  userId: string;
  password: string;
  confirmPassword: string;
  kepcoId: string;
}

export interface ISignupErrors {
  termsAgreed?: string;
  privacyAgreed?: string;
  kepcoAgreed?: string;
  companyName?: string;
  managerName?: string;
  phone?: string;
  email?: string;
  userId?: string;
  password?: string;
  confirmPassword?: string;
  kepcoId?: string;
} 
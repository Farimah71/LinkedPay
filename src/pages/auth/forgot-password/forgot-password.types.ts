export interface ForgotPasswordInputs {
  lang?: string;
  phoneCountry?: string;
  phoneNumber: string;
  email: string;
}

export interface SetPasswordInputs {
  password: string;
  confirmPassword: string;
  passwordEndDate: number;
  ip?: string;
}

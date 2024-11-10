export interface LoginInput {
  phoneOrEmail: string;
  lang: string;
  phoneCountry?: string;
  phoneNumber?: string;
  password: string;
  email?: string;
  ip?: string;
  version?: string;
}

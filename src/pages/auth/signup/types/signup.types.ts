export interface SignupInput {
  name: string;
  surname: string;
  phoneNumber: string;
  email: string;
  password: string;
  passwordRepeat: string;
  ip?: string;
  lang: string;
}

export type RuleAccepted = {
  id: number;
  isAccepted: boolean;
};

export interface ContractType {
  id: number;
  title: string;
  isRequired: boolean;
  productId: number;
}

export interface NewContractType extends ContractType {
  checkboxName?: "checkbox_rule_1" | "checkbox_rule_2" | "checkbox_rule_3";
}

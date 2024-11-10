export type RuleModalProps = {
  state: boolean;
  title: string;
  content: { title: string; text: string };
  isLoading?: boolean;
  handleRuleAccept?: () => void;
  handleCloseModal?: () => void;
};

export const convertArrayToSelectOptions = (array: [], keys: string[]) =>
  array.map((item) => ({ value: item[keys[0]], label: item[keys[1]] }));

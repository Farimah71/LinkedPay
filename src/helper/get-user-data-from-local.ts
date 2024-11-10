export const getUserDataFromLocalstorage = (key: string) => {
  return JSON.parse(localStorage.trpos__user_info)[key];
};

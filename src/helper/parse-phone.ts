import { parsePhoneNumberFromString } from "libphonenumber-js";

export const parsePhoneNumber = (phone: string) => {
  const parsedNumber = parsePhoneNumberFromString(phone);

  if (parsedNumber) {
    return {
      number: parsedNumber.nationalNumber,
      country: parsedNumber.country,
    };
  }
};
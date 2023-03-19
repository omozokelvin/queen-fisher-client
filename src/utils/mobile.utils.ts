import {
  isValidPhoneNumber,
  parsePhoneNumber,
  type CountryCode,
} from 'libphonenumber-js/mobile';

export const formatMobile = (
  phoneNumber: string,
  countryCode: CountryCode = 'NG'
) => {
  if (!isValidPhoneNumber(phoneNumber, countryCode)) {
    return '';
  }

  return parsePhoneNumber(phoneNumber, 'NG')
    .formatInternational()
    .replaceAll(' ', '')
    .substring(1);
};

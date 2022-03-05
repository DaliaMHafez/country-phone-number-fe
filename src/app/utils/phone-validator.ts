export function isValidPhoneNumber(phoneNumber: string, regExpression: RegExp): boolean {
  return regExpression.test(String(phoneNumber).toLowerCase());

}

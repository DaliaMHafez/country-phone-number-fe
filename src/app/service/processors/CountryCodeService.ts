import { isValidPhoneNumber } from '../../utils/phone-validator';

export abstract class CountryCodeService {
  abstract process(countryCode: string): any;
  protected validate(email: string, regExpression: RegExp): boolean {
    return isValidPhoneNumber(email, regExpression);
  }
}

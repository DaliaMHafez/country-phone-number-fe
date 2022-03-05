import { CountryCode, CountryCodeLabel } from '../../model/enums/countrycode';
import { CountryCodeService } from './CountryCodeService';
import { CountryCodeValidExpression, CountryCodeValidState } from '../../model/enums/countrycode-valid-expression';

export class MozambiqueCountryCodeProcessingService extends CountryCodeService {

    constructor() {
      super();
    }

    public process(customer): any {
      customer.country = CountryCodeLabel.get(CountryCode.MOZAMBIQUE) ;
      this.validate(customer.phone, CountryCodeValidExpression.get(customer.country)) ?
      customer.valid = CountryCodeValidState.Valid : customer.valid = CountryCodeValidState.Invalid;
      return customer;
    }

}

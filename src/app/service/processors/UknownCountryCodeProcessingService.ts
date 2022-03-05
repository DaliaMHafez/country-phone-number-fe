import { CountryCodeService } from './CountryCodeService';
import { CountryCodeValidState } from '../../model/enums/countrycode-valid-expression';

export class UknownCountryCodeProcessingService extends CountryCodeService {

    constructor() {
      super();
    }

    public process(customer): any {
      customer.country = '-';
      customer.valid = CountryCodeValidState.Invalid;
      return customer;
    }

}

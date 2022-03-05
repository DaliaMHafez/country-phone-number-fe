import { CountryCode } from '../../model/enums/countrycode';
import { CameronCountryCodeProcessingService } from './CameronCountryCodeProcessingService';
import { EthiopiaCountryCodeProcessingService } from './EthiopiaCountryCodeProcessingService';
import { MorocoCountryCodeProcessingService } from './MorocoCountryCodeProcessingService';
import { MozambiqueCountryCodeProcessingService } from './MozambiqueCountryCodeProcessingService';
import { UgandaCountryCodeProcessingService } from './UgandaCountryCodeProcessingService';
import { UknownCountryCodeProcessingService } from './UknownCountryCodeProcessingService';

import { CountryCodeService } from './CountryCodeService';

export class CountryCodeProcessorFactory {
    constructor() {
    }

    public getCountryCodeProcessor(countryCode: CountryCode): CountryCodeService {
      switch (countryCode) {
        case CountryCode.CAMEROON:
          return new CameronCountryCodeProcessingService();
        case CountryCode.ETHIOPIA:
          return new EthiopiaCountryCodeProcessingService();
        case CountryCode.MOROCCO:
          return new MorocoCountryCodeProcessingService();
        case CountryCode.MOZAMBIQUE:
          return new MozambiqueCountryCodeProcessingService();
        case CountryCode.UGANDA:
          return new UgandaCountryCodeProcessingService();
        default:
          return new UknownCountryCodeProcessingService();
      }
    }
}

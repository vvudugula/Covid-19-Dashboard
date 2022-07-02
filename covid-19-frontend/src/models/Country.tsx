export class Country {

  ID: String;
  country: String;
  countryCode: String;

  newConfirmed: Number;
  totalConfirmed: Number;
  newDeaths: Number;
  totalDeaths: Number;
  newRecovered: Number;
  totalRecovered: Number;
  date: Date;

  constructor(countryObj: any) {
    this.ID = countryObj.ID;
    this.country = countryObj.Country;
    this.countryCode = countryObj.CountryCode;
    this.newConfirmed = countryObj.NewConfirmed;
    this.totalConfirmed = countryObj.TotalConfirmed;
    this.newDeaths = countryObj.NewDeaths;
    this.totalDeaths = countryObj.TotalDeaths;
    this.newRecovered = countryObj.NewRecovered;
    this.totalRecovered = countryObj.TotalRecovered;
    this.date = countryObj.Date;
  }
}


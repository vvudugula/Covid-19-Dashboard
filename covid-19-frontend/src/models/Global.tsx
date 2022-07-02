export class Global {

    newConfirmed: number;
    totalConfirmed: number;
    newDeaths: number;
    totalDeaths: number;
    newRecovered: number;
    totalRecovered: number;
    date: Date;
  
    constructor(countryObj: any) {
      this.newConfirmed = countryObj.NewConfirmed;
      this.totalConfirmed = countryObj.TotalConfirmed;
      this.newDeaths = countryObj.NewDeaths;
      this.totalDeaths = countryObj.TotalDeaths;
      this.newRecovered = countryObj.NewRecovered;
      this.totalRecovered = countryObj.TotalRecovered;
      this.date = countryObj.Date;
    }
  }
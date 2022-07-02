import { Country } from "./Country";
import { Global } from "./Global";
export class Summary{
   
  id: String;
  global : Global;
  countries : Country[] ;
  date:Date;

  constructor(summaryObj : any) {
    this.id = summaryObj.ID;
    this.global = new Global(summaryObj.Global);
    let cont = [];
    for(const cntr of summaryObj.Countries) {
      cont.push(new Country(cntr));
    }
    this.countries = cont;
    this.date = summaryObj.Date;
  }

}


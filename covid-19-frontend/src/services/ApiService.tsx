export class AppService {
    public async getSummary(): Promise<any> {
        const response = await fetch('http://localhost:3001/api/summary');
        return await response.json();
    }
  
    public async getByCountry(country:string): Promise<any> {
        const response = await fetch('http://localhost:3001/api/dayone/country/'+country);
        return await response.json();
    }

}

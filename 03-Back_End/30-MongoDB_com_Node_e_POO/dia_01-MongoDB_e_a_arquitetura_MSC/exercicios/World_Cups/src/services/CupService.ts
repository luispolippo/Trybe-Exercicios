import CupModel from '../models/CupModel';
import { ICup } from '../schema/CupSchema';

class CupService {
  constructor(private cupModel = new CupModel()) {}

  public async getCups(): Promise<ICup[]> {
    return this.cupModel.getCup();
  }

  public async getCupByYear(year: number): Promise<ICup | null> {
    return this.cupModel.getCupByYear(year);
  }

  public async createCup(cupData: ICup): Promise<ICup> {
    return this.cupModel.createCup(cupData);
  }

  public async updateCup(id: string, cupData: Partial<ICup>): Promise<ICup | null> {
    return this.cupModel.updateCup(id, cupData);
  }

  public async deleteCup(champions: string): Promise<ICup | null> {
    return this.cupModel.deleteCup(champions);
  }  
}

export default CupService;

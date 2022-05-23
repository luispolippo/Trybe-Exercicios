import { model } from 'mongoose';
import { CupSchema, ICup } from '../schema/CupSchema';

class CupModel {
  constructor(private cupModel = model<ICup>('tournaments', CupSchema)) {}

  public async getCup(): Promise<ICup[]> {
    return this.cupModel.find();
  }

  public async getCupByYear(year: number): Promise<ICup | null> {
    return this.cupModel.findOne({ year });
  }

  public async createCup(cupData: ICup): Promise<ICup> {
    return this.cupModel.create(cupData);
  }

  public async updateCup(id: string, cupData: Partial<ICup>): Promise<ICup | null> {
    return this.cupModel.findOneAndUpdate(
      { _id: id },
      { ...cupData },
      { new: true },
    );
  }

  public async deleteCup(champions: string): Promise<ICup | null> {
    return this.cupModel.findOneAndDelete({ champions });
  }
}

export default CupModel;

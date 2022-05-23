import { Request, Response } from 'express';
import CupService from '../services/CupService';

class CupController {
  constructor(private cupService = new CupService()) {}

  internalError = 'Internal Server Error';

  yearNotFound = 'Não houve copa do mundo neste ano';

  notFound = 'Not Found';

  public getCups = async (req: Request, res: Response): Promise<Response> => {
    try {
      const cups = await this.cupService.getCups();
      return res.status(200).json(cups);
    } catch (err: unknown) {
      return res.status(500).json({ message: this.internalError});
    }
  }

  public getCupByYear = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { year } = req.params;
      const cup = await this.cupService.getCupByYear(Number(year));
      if (cup) {
        return res.status(200).json(cup);
      }

      return res.status(404).json({ message: this.yearNotFound });
    } catch (err: unknown) {
      return res.status(500).json({ message: this.internalError });
    }
  }

  public createCup = async (req: Request, res: Response): Promise<Response> => {
    try {
      const createdCup = await this.cupService.createCup(req.body);

      return res.status(201).json(createdCup);
    } catch (err: unknown) {
      return res.status(500).json({ message: this.internalError });
    }
  }

  public updateCup = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { id } = req.params;
      const updatedCup = await this.cupService.updateCup(id, req.body);
      if (updatedCup) {
        return res.status(200).json(updatedCup);
      }

      return res.status(404).json({ message: this.notFound });
    } catch (err: unknown) {
      return res.status(500).json({ message: this.internalError });
    }
  }

  public deleteCup = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { champion } = req.params;
      const deletedCup = await this.cupService.deleteCup(champion);
      if (deletedCup) {
        return res.status(200).json(deletedCup);
      }

      return res.status(404).json({ message: this.notFound });
    } catch (err: unknown) {
      return res.status(500).json({ message: this.internalError });
    }
  }
}

export default CupController;

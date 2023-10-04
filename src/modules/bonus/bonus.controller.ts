import { Controller, Get } from '@nestjs/common';
import { BonusService } from './bonus.service';

@Controller('bonus')
export class BonusController {
  constructor(private readonly bonusService: BonusService) {}

  @Get()
  findAll(): Promise<string[]> {
    return this.bonusService.getAvailableBonusesPerUser('1');
  }
}

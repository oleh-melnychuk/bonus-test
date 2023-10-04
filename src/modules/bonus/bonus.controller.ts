import { Body, Controller, Post } from '@nestjs/common';
import { BonusService } from './bonus.service';
import { ListBonusDto } from './dto/list-bonus.dto';

@Controller('bonus')
export class BonusController {
  constructor(private readonly bonusService: BonusService) {}

  @Post('list')
  findAll(@Body() body: ListBonusDto): Promise<number[]> {
    return this.bonusService.getAvailableBonusesPerUser(body.userId);
  }
}

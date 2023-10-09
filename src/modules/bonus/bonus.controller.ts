import { Body, Controller, Post } from '@nestjs/common';
import { ListBonusDto } from './dto/list-bonus.dto';
import { IBonusService } from './types/bonus.interface';

@Controller('bonus')
export class BonusController {
  constructor(private readonly bonusService: IBonusService) {}

  @Post('list')
  findAll(@Body() body: ListBonusDto): Promise<number[]> {
    return this.bonusService.getAvailableBonusesPerUser(body.userId);
  }
}

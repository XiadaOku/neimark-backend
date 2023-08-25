import { Body, Controller, Delete, Param, Patch } from '@nestjs/common';
import { UserAchivementsService } from './user-achivements.service';

@Controller('user-achivements')
export class UserAchivementsController {
  constructor(private readonly userAchivementService: UserAchivementsService) {}

  @Patch(':id/add')
  addLevel(@Param('id') id: string, @Body() body: { level: number }) {
    return this.userAchivementService.upgradeAchivement(id, body.level);
  }

  @Patch(':id/set')
  setLevel(@Param('id') id: string, @Body() body: { level: number }) {
    return this.userAchivementService.setAchivementLevel(id, body.level);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userAchivementService.remove(id);
  }
}

import { Module } from '@nestjs/common';
import { UserAchivementsController } from './user-achivements.controller';
import { PrismaService } from 'src/prisma.service';
import { UserAchivementsService } from './user-achivements.service';

@Module({
  controllers: [UserAchivementsController],
  providers: [PrismaService, UserAchivementsService]
})
export class UserAchivementsModule {}

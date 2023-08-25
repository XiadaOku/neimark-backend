import { Module } from '@nestjs/common';
import { AchivementsService } from './achivements.service';
import { AchivementsController } from './achivements.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [AchivementsController],
  providers: [AchivementsService, PrismaService]
})
export class AchivementsModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsModule } from './events/events.module';
import { AchivementsModule } from './achivements/achivements.module';
import { UserModule } from './user/user.module';
import { InternshipModule } from './internship/internship.module';
import { PrismaService } from './prisma.service'
import { AccessTokenStrategy, RefreshTokenStrategy } from './jwt.service';
import { UserAchivementsService } from './user-achivements/user-achivements.service';
import { UserAchivementsModule } from './user-achivements/user-achivements.module';

@Module({
  imports: [EventsModule, AchivementsModule, UserModule, InternshipModule, UserAchivementsModule],
  controllers: [AppController],
  providers: [AppService, PrismaService, AccessTokenStrategy, RefreshTokenStrategy, UserAchivementsService],
})
export class AppModule {}

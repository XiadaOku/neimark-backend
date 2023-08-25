import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UserAchivementsService {
    constructor(private readonly prismaService: PrismaService) {}

    async upgradeAchivement(id: string, level: number) {
      const achivement = await this.prismaService.achivement.findFirst({
        where: {
          id: id
        }
      });

      this.setLevel(achivement, achivement.level + level);
    }
    
    async setAchivementLevel(id: string, level: number) {
      const achivement = await this.prismaService.achivement.findFirst({
        where: {
          id: id
        }
      });

      this.setLevel(achivement, level);
    }

    async setLevel(achivement, level) {
      const user = await this.prismaService.user.findFirst({
        where: {
          id: achivement.userId
        }
      });
      await this.prismaService.user.update({
        where: {
          id: achivement.userId
        },
        data: {
          level: user.level + (level - achivement.level)
        }
      });
      return await this.prismaService.achivement.update({
        where: {
          id: achivement.id
        },
        data: {
          level: level
        }
      });
    }

    async remove(id: string) {
      await this.prismaService.achivement.delete({
        where: {
          id: id
        }
      });
    }
}

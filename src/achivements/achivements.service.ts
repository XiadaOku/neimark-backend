import { Injectable } from '@nestjs/common';
import { CreateAchivementDto } from './dto/create-achivement.dto';
import { UpdateAchivementDto } from './dto/update-achivement.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AchivementsService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createAchivementDto: CreateAchivementDto) {
    return await this.prismaService.achivementType.create({
      data: {
        ...createAchivementDto
      }
    });
  }

  async findAll() {
    return await this.prismaService.achivementType.findMany();
  }

  async findOne(id: string) {
    return await this.prismaService.achivementType.findFirst({
      where: {
        id: id
      }
    });
  }

  async update(id: string, updateAchivementDto: CreateAchivementDto) {
    return await this.prismaService.achivementType.update({
      where: {
        id: id
      },
      data: {
        ...updateAchivementDto
      }
    });
  }

  async remove(id: string) {
    await this.prismaService.achivementType.delete({
      where: {
        id: id
      }
    });
  }
}

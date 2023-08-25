import { Injectable } from '@nestjs/common';
import { CreateInternshipDto } from './dto/create-internship.dto';
import { UpdateInternshipDto } from './dto/update-internship.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class InternshipService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createInternshipDto: CreateInternshipDto) {
    return await this.prismaService.internship.create({
      data: {
        ...createInternshipDto
      }
    });
  }

  async findAll() {
    return await this.prismaService.internship.findMany();
  }

  async findOne(id: string) {
    return await this.prismaService.internship.findFirst({
      where: {
        id: id
      }
    });
  }

  async update(id: string, updateInternshipDto: CreateInternshipDto) {
    return await this.prismaService.internship.update({
      where: {
        id: id
      },
      data: {
        ...updateInternshipDto
      }
    });
  }

  async remove(id: string) {
    await this.prismaService.internship.delete({
      where: {
        id: id
      }
    });
  }

  async connectAchivement(id: string, typeId: string) {
    const connected = await this.prismaService.internshipOnType.findFirst({
      where: {
        internshipId: id,
        typeId: typeId
      }
    });

    if (!connected) {
      await this.prismaService.internshipOnType.create({
        data: {
          internshipId: id,
          typeId: typeId
        }
      });
    }
  }

  async getAchivements(id: string) {
    return await this.prismaService.internshipOnType.findMany({
      where: {
        internshipId: id
      },
      include: {
        type: true
      }
    });
  }
}

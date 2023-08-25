import { Injectable, Param } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    return await this.prismaService.user.create({
      data: {
        ...createUserDto
      }
    });
  }

  async findAll() {
    return await this.prismaService.user.findMany();
  }

  async rating() {
    return await this.prismaService.user.findMany({
      orderBy: {
        level: "desc"
      }
    });
  }

  async findOne(id: string) {
    return await this.prismaService.user.findFirst({
      where: {
        id: id
      }
    });
  }

  async update(id: string, updateUserDto: CreateUserDto) {
    return await this.prismaService.user.update({
      where: {
        id: id
      },
      data: {
        ...updateUserDto
      }
    });
  }

  async remove(id: string) {
    await this.prismaService.user.delete({
      where: {
        id: id
      }
    });
  }

  async connectAchivement(id: string, typeId: string) {
    const connected = await this.prismaService.achivement.findFirst({
      where: {
        userId: id,
        typeId: typeId
      }
    });
    
    if (!connected) {
      return await this.prismaService.achivement.create({
        data: {
          userId: id,
          typeId: typeId
        }
      });
    } 
  }

  async getAchivements(id: string) {
    return await this.prismaService.achivement.findMany({
      where: {
        userId: id
      }
    });
  }

  async connectEvent(id: string, eventId: string) {
    const savedUsers = await this.prismaService.savedEvent.findMany({
      where: {
        eventId: eventId
      }
    });
    const event = await this.prismaService.event.findFirst({
      where: {
        id: eventId
      }
    });

    if (savedUsers.length < event.maxPeople) {
      return await this.prismaService.savedEvent.create({
        data: {
          userId: id,
          eventId: eventId
        }
      });
    }
  }

  async getEvents(id: string, filter: Date = new Date(-8640000000000000)) {
    return await this.prismaService.savedEvent.findMany({
      where: {
        userId: id,
        event: {
          date: {
            gte: filter
          }
        }
      },
      include: {
        event: true
      },
      orderBy: {
        event: {
          date: "asc"
        }
      }
    });
  }

  async connectInternship(id: string, internshipId: string) {
    return await this.prismaService.internshipOnUser.create({
      data: {
        userId: id,
        internshipId: internshipId
      }
    });
  }

  async getInternships(id: string) {
    return await this.prismaService.achivement.findMany({
      where: {
        userId: id
      }
    });
  }
}

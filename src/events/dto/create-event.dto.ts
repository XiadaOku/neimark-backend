import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDate, IsInt, IsUrl } from 'class-validator';

export class CreateEventDto {
    @ApiProperty({ example: "string" })
    title: string;

    @ApiProperty({ example: "string" })
    description: string;

    @ApiProperty({ example: "string" })
    review: string;

    @ApiProperty({ example: "string" })
    userId: string;

    @ApiProperty({ example: 15 })
    @IsInt()
    maxPeople: number;

    @ApiProperty({ example: "https://www.youtube.com/watch?v=EgSxYPUFe64" })
    @IsUrl()
    authorVideo: string;

    @ApiProperty({ example: "12-19-2006" })
    @Type(() => Date)
    @IsDate()
    date: Date;
}
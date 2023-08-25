import { ApiProperty } from '@nestjs/swagger';
import { IsUrl } from 'class-validator'

export class CreateAchivementDto {
    @ApiProperty({ example: "string" })
    title: string;

    @ApiProperty({ example: "string" })
    description: string;

    @ApiProperty({ example: "https://example.com/image" })
    @IsUrl()
    iconLink: string;
}

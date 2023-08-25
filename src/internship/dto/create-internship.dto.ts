import { ApiProperty } from "@nestjs/swagger";

export class CreateInternshipDto {
    @ApiProperty({ example: "string" })
    title: string;

    @ApiProperty({ example: "string" })
    description: string;

    @ApiProperty({ example: "string" })
    companyId: string;
}
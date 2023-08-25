import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({ example: "string" })
    name: string;
    
    @ApiProperty({ example: "string" })
    surname: string;
}
import { ApiProperty } from "@nestjs/swagger";

export class CreateCommandDto {
    @ApiProperty()
    total: number;
    @ApiProperty()
    products: []
}
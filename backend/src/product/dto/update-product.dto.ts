import { ApiProperty } from "@nestjs/swagger";

export class UpdateProductInCommandDto {
    @ApiProperty()
    ready: boolean;
    @ApiProperty()
    packed: boolean;
}
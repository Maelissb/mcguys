import { PartialType } from '@nestjs/swagger';
import { CreateProductInCommandDto } from './create-product-in-command.dto';

export class UpdateProductInCommandDto extends PartialType(CreateProductInCommandDto) {}

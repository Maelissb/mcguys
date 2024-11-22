import { Module } from '@nestjs/common';
import { ProductInCommandService } from './product-in-command.service';
import { ProductInCommandController } from './product-in-command.controller';

@Module({
  controllers: [ProductInCommandController],
  providers: [ProductInCommandService],
})
export class ProductInCommandModule {}

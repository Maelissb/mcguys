import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { CommandModule } from './command/command.module';
import { ProductInCommandModule } from './product-in-command/product-in-command.module';
import { ProductTypeModule } from './product-type/product-type.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [ProductModule, CommandModule, ProductInCommandModule, ProductTypeModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}

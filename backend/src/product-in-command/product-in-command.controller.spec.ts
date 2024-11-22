import { Test, TestingModule } from '@nestjs/testing';
import { ProductInCommandController } from './product-in-command.controller';
import { ProductInCommandService } from './product-in-command.service';

describe('ProductInCommandController', () => {
  let controller: ProductInCommandController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductInCommandController],
      providers: [ProductInCommandService],
    }).compile();

    controller = module.get<ProductInCommandController>(ProductInCommandController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

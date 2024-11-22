import { Test, TestingModule } from '@nestjs/testing';
import { ProductInCommandService } from './product-in-command.service';

describe('ProductInCommandService', () => {
  let service: ProductInCommandService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductInCommandService],
    }).compile();

    service = module.get<ProductInCommandService>(ProductInCommandService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

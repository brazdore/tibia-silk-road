import { Test, TestingModule } from '@nestjs/testing';
import { ItemsService } from './items.service';
import { PrismaService } from '../database/prisma.service';
import { NotFoundException } from '@nestjs/common';

const mockPrisma = {
  item: {
    findMany: jest.fn(),
    findUnique: jest.fn(),
  },
};

describe('ItemsService', () => {
  let service: ItemsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ItemsService,
        { provide: PrismaService, useValue: mockPrisma },
      ],
    }).compile();

    service = module.get<ItemsService>(ItemsService);
    jest.clearAllMocks();
  });

  it('findAll → returns items array', async () => {
    mockPrisma.item.findMany.mockResolvedValue([{ id: 1, name: 'Broadsword' }]);
    const result = await service.findAll();
    expect(result).toHaveLength(1);
    expect(mockPrisma.item.findMany).toHaveBeenCalledWith({
      orderBy: { id: 'asc' },
    });
  });

  it('findOne → returns item when found', async () => {
    mockPrisma.item.findUnique.mockResolvedValue({ id: 1, name: 'Broadsword' });
    const result = await service.findOne(1);
    expect(result.name).toBe('Broadsword');
  });

  it('findOne → throws NotFoundException when not found', async () => {
    mockPrisma.item.findUnique.mockResolvedValue(null);
    await expect(service.findOne(9999)).rejects.toThrow(NotFoundException);
  });
});

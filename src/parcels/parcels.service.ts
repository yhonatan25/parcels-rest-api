import { PG_UNIQUE_VIOLATION } from '@drdgvhbh/postgres-error-codes';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateParcelDto } from './dto/create-parcel.dto';
import { Parcel } from './entities/parcel.entity';

@Injectable()
export class ParcelsService {
  constructor(
    @InjectRepository(Parcel)
    private parcelRepository: Repository<Parcel>,
  ) {}

  async create(createParcelDto: CreateParcelDto) {
    return await this.parcelRepository
      .insert(createParcelDto)
      .catch((err: any) => {
        if (err.code === PG_UNIQUE_VIOLATION) {
          throw new BadRequestException({
            message: `Duplicated SKU ${createParcelDto.sku}`,
          });
        }
      });
  }

  async findAll() {
    return await this.parcelRepository.find();
  }
}

import { PG_UNIQUE_VIOLATION } from '@drdgvhbh/postgres-error-codes';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateParcelDto } from './dto/create-parcel.dto';
import { Parcel } from './entities/parcel.entity';
import SnowflakeId from 'snowflake-id';
import { type BASE62 } from '@thi.ng/base-n';

let base62: typeof BASE62;
eval(`import('@thi.ng/base-n')`).then((module) => {
  base62 = module.BASE62;
});

@Injectable()
export class ParcelsService {
  constructor(
    @InjectRepository(Parcel)
    private parcelRepository: Repository<Parcel>,
  ) {}

  async create(createParcelDto: CreateParcelDto) {
    //This need to be configurable on production
    //We need to inject it instead of instantiating here.
    const snowflake = new SnowflakeId({
      mid: 1,
      offset: 1703119813189,
    });
    const snowflakeId = BigInt(snowflake.generate());
    createParcelDto.shortId = base62.encodeBigInt(snowflakeId);

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

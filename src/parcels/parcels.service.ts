import { Injectable } from '@nestjs/common';
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
    return await this.parcelRepository.save(createParcelDto);
  }

  async findAll() {
    return await this.parcelRepository.find();
  }
}

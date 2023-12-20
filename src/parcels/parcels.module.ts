import { Module } from '@nestjs/common';
import { ParcelsService } from './parcels.service';
import { ParcelsController } from './parcels.controller';
import { Parcel } from './entities/parcel.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Parcel])],
  controllers: [ParcelsController],
  providers: [ParcelsService],
})
export class ParcelsModule {}

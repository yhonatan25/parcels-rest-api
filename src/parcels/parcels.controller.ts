import { Controller, Get, Post, Body } from '@nestjs/common';
import { ParcelsService } from './parcels.service';
import { CreateParcelDto } from './dto/create-parcel.dto';

@Controller('parcels')
export class ParcelsController {
  constructor(private readonly parcelsService: ParcelsService) {}

  @Post()
  create(@Body() createParcelDto: CreateParcelDto) {
    return this.parcelsService.create(createParcelDto);
  }

  //Since we're not using specs, I'll use this endpoint as a way to test the POST endpoint
  @Get()
  findAll() {
    return this.parcelsService.findAll();
  }
}

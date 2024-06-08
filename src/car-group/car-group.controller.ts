import { Controller, Get, Post, Body, Patch, Param, Delete,Query } from '@nestjs/common';
import { CarGroupService } from './car-group.service';
import {Prisma } from '@prisma/client'
import { type } from 'os';
import { DatabaseService } from 'src/database/database.service';
//import { CreateCarGroupDto } from './dto/create-car-group.dto';
//import { UpdateCarGroupDto } from './dto/update-car-group.dto';

@Controller('car-group')
export class CarGroupController {
  constructor(private readonly carGroupService: CarGroupService) {}

  @Post()
  create(@Body() createCarGroupDto: Prisma.CarCreateInput) {
    return this.carGroupService.create(createCarGroupDto);
  }

  @Get()
  findAll(@Query('type') type?:  'Gasoline' | 'Hybrid' | 'Electric' | 'Diesel') {
    return this.carGroupService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carGroupService.findOne(+id);
  }
/*
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCarGroupDto: Prisma.CarUpdateInput) {
    return this.carGroupService.update(+id, updateCarGroupDto);
  }
*/
@Patch(':id')
update(@Param('id') id: string, @Body() updateCarGroupDto: Prisma.CarUpdateInput) {
  return this.carGroupService.update(+id, updateCarGroupDto);
}

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carGroupService.remove(+id);
  }
}

import { Injectable } from '@nestjs/common';
import {Prisma} from '@prisma/client'
import { DatabaseService } from 'src/database/database.service';


import { CreateCarGroupDto } from './dto/create-car-group.dto';
import { UpdateCarGroupDto } from './dto/update-car-group.dto';

@Injectable()
export class CarGroupService {
  constructor(private readonly databaseService: DatabaseService){}
  async create(createCarGroupDto: Prisma.CarCreateInput) {
    return this.databaseService.car.create({
      data:createCarGroupDto
    });
  }

  async findAll(type? :'Gasoline' | 'Hybrid' | 'Electric' | 'Diesel') {
    if(type) return this.databaseService.car.findMany({
      where:{
        type,
      }
    })
    return this.databaseService.car.findMany();
  }

  async findOne(id: number) {
    return  this.databaseService.car.findUnique({
      where:{
        id,
      }
    })
  }
/*
  async update(id: number, updateCarGroupDto: Prisma.CarUpdateInput) {
     this.databaseService.car.update({
      where: {
        id,
       },
       data: updateCarGroupDto,
     })
  }*/

  async update(id: number, updateCarGroupDto: Prisma.CarUpdateInput) {
    try {
      return this.databaseService.car.update({
        where: {
          id,
        },
        data: updateCarGroupDto,
      });
    } catch (error) {
      console.error('Error updating car:', error);
      throw error;
    }
  }

  async remove(id: number) {
    return  this.databaseService.car.delete({
      where:{
        id,
      }
    })
  }
}

import { Controller,Get , Param , Body , Post, Patch, Delete,Query
     ,ParseIntPipe ,ValidationPipe} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
@Controller('cars')  
export class CarsController {

   constructor(private readonly carsService: CarsService){}
   
    @Get() //GET cars  or /cars?role=value
    findAll(@Query('type') type? :'Hybrid'| 'Electric' | 'Gasoline' |'Diesel')
    {
        return this.carsService.findAll(type);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number)
    {
        return this.carsService.findOne(id)
    }

    @Get('interns') //Get car/interns
    findAllInterns()
    {

    }

    @Post() // Post /cars
    create(@Body(ValidationPipe) createCarDto:CreateCarDto)
    {
        return this.carsService.create(createCarDto)
    }

    @Patch(':id') //PATCH /cars/:id
    update(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe)
    updateCarDto: UpdateCarDto)
    {
        return this.carsService.update(id, updateCarDto)
    }

    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number)
    {
        return this.carsService.delete(id)
    }
}

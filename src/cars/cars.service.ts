import { Injectable } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
 
    private cars = [
        { id: 1, brand: 'Ferrari', model: '488', price: 5000000, year: 2011, type: 'Gasoline', engineSpecs: 'V8', topSpeed: 330, imageSrc: 'url_to_ferrari_image' },
        { id: 2, brand: 'Honda', model: 'Type R', price: 5000000, year: 2013, type: 'Hybrid', engineSpecs: 'I4 Turbo', topSpeed: 272, imageSrc: 'url_to_honda_image' },
        { id: 3, brand: 'Audi', model: 'TTR6', price: 5000000, year: 2019, type: 'Diesel', engineSpecs: 'V6', topSpeed: 250, imageSrc: 'url_to_audi_image' },
        { id: 4, brand: 'Tesla', model: 'Model S', price: 90000, year: 2016, type: 'Electric', engineSpecs: 'Electric', topSpeed: 250, imageSrc: 'url_to_tesla_image' },
        { id: 5, brand: 'Toyota', model: 'Prius', price: 30000, year: 2011, type: 'Hybrid', engineSpecs: 'I4', topSpeed: 180, imageSrc: 'url_to_toyota_image' },
        { id: 6, brand: 'BMW', model: 'M3', price: 62500, year: 2018, type: 'Gasoline', engineSpecs: 'I6', topSpeed: 250, imageSrc: 'url_to_bmw_image' },
        { id: 7, brand: 'Mercedes-Benz', model: 'E-Class', price: 42000, year: 2023, type: 'Diesel', engineSpecs: 'I6 Diesel', topSpeed: 250, imageSrc: 'url_to_mercedes_image' }
    ];
    

      findAll(type?: 'Gasoline'|'Hybrid'| 'Electric'|'Diesel')
       {
        if(type){
            const typesArray = this.cars.filter(car=> car.type === type)
          if(typesArray.length === 0) 
          throw new NotFoundException('Car Type Not Found')
        return typesArray
        }
        return this.cars
       }

       findOne(id: number)
       {
        const car = this.cars.find(car => car.id === id)

        if(!car) throw new NotFoundException ('Car with this id = '+id+' Not found')
        return car
       }

       create(createCarDto:CreateCarDto )
       {
        const carByHighestId = [...this.cars].sort((a,b)=>b.id-a.id)
        const newCar = {
            id: carByHighestId[0].id +1,
            ...createCarDto
        }
        this.cars.push(newCar)
        return newCar
       }


       update(id: number, updateCarDto:UpdateCarDto)
       {
        this.cars = this.cars.map(car => {
            if(car.id === id)
            {
                return { ...car, ...updateCarDto}
            }
            return this.findOne(id)

        })

        return this.findOne(id);
       }



       delete(id: number){
        const removedCar = this.findOne(id)
        this.cars = this.cars.filter(car => car.id !==id)
        return removedCar
       }
}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarsModule } from './cars/cars.module';
import { DatabaseModule } from './database/database.module';
//import { CarStoreModule } from './car-store/car-store.module';
import { CarGroupModule } from './car-group/car-group.module';

@Module({
  imports: [CarsModule, DatabaseModule, CarGroupModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
